import { create } from "zustand";

const useCommentStore = create((set) => ({
    openComment: false,

    commentId: null,

    setOpen: (val) => set((state) => ({ opencomment: val })),
    setCommentId: (val) => set((state) => ({ commentId: val })),
}));

export default useCommentStore;