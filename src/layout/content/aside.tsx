import { Icon } from "@iconify/react";
import { useAppSelector } from "store/hooks";

const Aside = (): JSX.Element | null => {
  const user = useAppSelector((state) => state.user);

  return user ? (
    <aside className="md:absolute top-10 left-10 lg:left-20 xl:left-80 px-4 py-4 md:py-0 w-80 bg-transparent z-10">
      <div className="w-full flex items-center gap-4 md:block">
        <img
          src={user.data?.avatar_url}
          alt="avatar"
          className="inline-block overflow-hidden shadow-sm h-20 w-20 md:w-full md:h-auto"
          style={{ clipPath: "circle(50% at 50% 50%)" }}
        />
        <h3 className="text-xl md:mt-4 text-gray-500">{user.data?.login}</h3>
      </div>
      <div className="flex flex-col gap-4 my-4">
        <button className="bg-gray-100 hover:border-gray-400 border-[1px] border-gray-300 px-4 py-2 w-full rounded-md transition-colors text-gray-700">
          Follow
        </button>
        <p>{user.data?.bio}</p>
        <div className="flex items-center gap-1">
          <Icon icon="octicon:people-16" />
          <p className="font-bold mr-1">{user.data?.followers}</p>
          <p>followers</p>
          <p>.</p>
          <p className="font-bold mr-1">{user.data?.following}</p>
          <p>following</p>
        </div>
      </div>
    </aside>
  ) : null;
};

export default Aside;
