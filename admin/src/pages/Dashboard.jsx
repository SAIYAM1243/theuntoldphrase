import { useMantineColorScheme } from "@mantine/core";
import useStore from "../store";
import { useDisclosure } from "@mantine/hooks";
import { useEffect } from "react";
import { useAnalytics } from './../hooks/post-hook';
import { Toaster, toast } from "sonner";
import Stats from "../components/Stats";
import Graph from "../components/Graph";
import { clsx } from "clsx";
import { RecentFollowerTable, RecentPostTable } from "../components/Table";
import Loading from "../components/Loading";

const Dashboard = () => {

  const { colorScheme } = useMantineColorScheme();
  const { user } = useStore();

  const [visible, { toggle }] = useDisclosure(false);
  const { data, isPending, mutate } = useAnalytics(toast, toggle, user?.token);
  const theme = colorScheme === "dark";


  useEffect(() => {
    mutate()
  }, []);


  return (
    <div className="w-full ">
      <div className="w-full flex mt-5 items-center justify-between mb-4">
        <p className={clsx(
          "text-xl font-semibold text-slate-700",
          theme ? "text-white"
            : "text-slate-700"
        )}>
          Dashboard
        </p>
      </div>

      <Stats dt={data} />

      <div className="w-full py-8 ">
        <p className="py-5 text-base font-medium">
          View Stats for last 28 days
        </p>

        <Graph dt={data?.viewStats} />
      </div>

      <div className="flex gap-6 flex-col md:flex-row py-6">
        {/* recent followers*/}

        {/* <div className="w-full md:w-1/3 flex flex-col ">
          <span className={clsx(
            "py-5 text-base font-medium", theme ? "text-white" : "text-slate-600"
          )}>
            Recent followers
          </span>

          <RecentFollowerTable data={data?.last5Followers} theme={theme} />
        </div> */}

        {/*Top 5 contents */}
        <div className="w-full md:w-full flex flex-col ">
          <span className={clsx(
            "py-5 text-base font-medium", theme ? "text-white" : "text-slate-600"
          )}>
            Recent Content
          </span>

          <RecentPostTable data={data?.last5Posts} theme={theme} />
        </div>
      </div>

      <Loading visible={isPending} />

      <Toaster richColors />
    </div>
  );
};

export default Dashboard;
