import { Select, TextInput, useMantineColorScheme } from "@mantine/core";
import useStore from "../store";
import { useDisclosure } from "@mantine/hooks";
import { Toaster, toast } from "sonner";
import { useState, useEffect } from "react";
import { Link, RichTextEditor } from "@mantine/tiptap";
import { IconColorPicker } from "@tabler/icons-react";
import Color from "@tiptap/extension-color";
import { Highlight } from "@tiptap/extension-highlight";
import { Placeholder } from "@tiptap/extension-placeholder";
import SubScript from "@tiptap/extension-subscript";
import { Superscript } from "@tiptap/extension-superscript";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import { BubbleMenu, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { BiImages } from "react-icons/bi";
import Underline from "@tiptap/extension-underline";
import { uploadFile } from "../utils";
import Loading from "../components/Loading";
import { createSlug } from './../utils/index';
import { Button } from "@mantine/core";
import { useCreatePost } from "../hooks/post-hook";
import { clsx } from "clsx";
import { Image } from "@tiptap/extension-image";
import { chainCommands } from "tiptap-commands";


const WritePost = () => {

  const { colorScheme } = useMantineColorScheme();
  const theme = colorScheme === "dark";
  const { user } = useStore();
  const [visible, { toggle }] = useDisclosure(false);
  const { isPending, mutate } = useCreatePost(toast, toggle, user?.token);


  const [category, setCategory] = useState("NEWS");
  const [file, setFile] = useState("");
  const [title, setTitle] = useState(null);
  const [fileURL, setFileURL] = useState(null);


  let editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Write Posts here..."
      }),
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextStyle,
      Color,
      TextAlign.configure({ types: ["headings", "paragraph"] }),
      Image,
    ],
    content: "",
  });

  const handleSubmit = async () => {
    if (!fileURL || !category || !title) {
      toast.error("All fields are required");
      return;
    }

    const slug = createSlug(title);

    mutate({
      title,
      slug,
      cat: category,
      img: fileURL,
      desc: editor.getHTML(),
    })
  }

  useEffect(() => {
    file && uploadFile(setFileURL, file);

  }, [file]);


  return (
    <>
      <div className="w-full flex mt-5 items-center justify-between mb-4">
        <p className={clsx(
          "text-xl font-semibold text-slate-700",
          theme ? "text-white"
            : "text-slate-700"
        )}>
          Create Post
        </p>
      </div>

      <RichTextEditor editor={editor}>
        <div className="w-full flex flex-col md:flex-row flex-wrap gap-5 mb-8 p-2">
          <TextInput
            withAsterisk
            label="Post title"
            className="w-full flex-1"
            placeholder="Post title"
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Select
            label="Category"
            defaultValue={"POEMS"}
            placeholder="Pick Category"
            data={["POEMS", "OPEN LETTERS", "STORIES", "LIFE", "LOVE RELATIONSHIP"]}
            onChange={(val) => setCategory(val)}
          />

          <label
            className="flex items-center gap-1 text-base cursor-pointer mt-4"
            htmlFor='imgUpload'
          >
            <input
              type='file'
              onChange={(e) => setFile(e.target.files[0])}
              className="hidden"
              id="imgUpload"
              data-max-size='5120'
              accept=".jpg , .png, .jpeg"
            />
            <BiImages />
            <span>Post Image</span>
          </label>
        </div>

        {editor && (
          <BubbleMenu editor={editor}>
            <RichTextEditor.ControlsGroup>
              <RichTextEditor.Bold />
              <RichTextEditor.Italic />
              <RichTextEditor.Link />
            </RichTextEditor.ControlsGroup>
          </BubbleMenu>
        )}

        <RichTextEditor.Toolbar sticky stickyOffset={20}>
          <RichTextEditor.ColorPicker
            colors={[
              "#25262b",
              "#868e96",
              "#fa5252",
              "#e64980",
              "#be4bdb",
              "#7950f2",
              "#4c6ef5",
              "#228be6",
              "#15aabf",
              "#12b886",
              "#4ec057",
              "#82c91e",
              "#fabO05",
              " #fd7e14",
            ]}
          />
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Control interactive={true}>
              <IconColorPicker size='1rem' stroke={1.5} />
            </RichTextEditor.Control>
            <RichTextEditor.Color color="#F03E3E" />
            <RichTextEditor.Color color='#7048E8' />
            <RichTextEditor.Color color='#1098AD' />
            <RichTextEditor.Color color="#37B24D" />
            <RichTextEditor.Color color="#F59F00" />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.UnsetColor />

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Control
              onClick={() => {
                const url = window.prompt('Enter the URL of the image:');
                if (url) {
                  editor.chain().focus().setImage({ src: url }).run();
                }
              }}
            >
              <BiImages />
            </RichTextEditor.Control>
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>

            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
            <RichTextEditor.Underline />
            <RichTextEditor.Strikethrough />
            <RichTextEditor.ClearFormatting />
            <RichTextEditor.Highlight />
            <RichTextEditor.Code />
            <RichTextEditor.CodeBlock />

          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>

            <RichTextEditor.H1 />
            <RichTextEditor.H2 />
            <RichTextEditor.H3 />
            <RichTextEditor.H4 />

          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>

            <RichTextEditor.Blockquote />
            <RichTextEditor.Hr />
            <RichTextEditor.BulletList />
            <RichTextEditor.OrderedList />
            <RichTextEditor.Subscript />
            <RichTextEditor.Superscript />

          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>

            <RichTextEditor.Link />
            <RichTextEditor.Unlink />

          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>

            <RichTextEditor.AlignLeft />
            <RichTextEditor.AlignCenter />
            <RichTextEditor.AlignJustify />
            <RichTextEditor.AlignRight />

          </RichTextEditor.ControlsGroup>
        </RichTextEditor.Toolbar>

        <RichTextEditor.Content className="py-8" />
      </RichTextEditor>

      <div className="w-full flex items-end justify-end mt-6">
        <Button
          className={theme ? "bg-blue-600" : "bg-black"}
          onClick={() => handleSubmit()}
        >
          Submit Post
        </Button>
      </div>

      <Loading visible={isPending} />

      <Toaster richColors />

    </>
  );
};

export default WritePost;
