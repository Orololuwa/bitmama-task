import { Icon } from "@iconify/react";

const Aside = (): JSX.Element => {
  return (
    <aside className="md:absolute top-10 left-10 lg:left-20 xl:left-80 px-4 py-4 md:py-0 w-80 bg-transparent z-10">
      <div className="w-full flex items-center gap-4 md:block">
        <img
          src="https://avatars.githubusercontent.com/u/67964734?v=4"
          alt="avatar"
          className="inline-block overflow-hidden shadow-sm h-20 w-20 md:w-full md:h-auto"
          style={{ clipPath: "circle(50% at 50% 50%)" }}
        />
        <h3 className="text-xl md:mt-4 text-gray-500">Orololuwa</h3>
      </div>
      <div className="flex flex-col gap-4 my-4">
        <button className="bg-gray-100 hover:border-gray-400 border-[1px] border-gray-300 px-4 py-2 w-full rounded-md transition-colors">
          Follow
        </button>
        <p>trying to be better than yesterday</p>
        <div className="flex items-center gap-1">
          <Icon icon="octicon:people-16" />
          <p className="font-bold mr-1">4</p>
          <p>followers</p>
          <p>.</p>
          <p className="font-bold mr-1">6</p>
          <p>following</p>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
