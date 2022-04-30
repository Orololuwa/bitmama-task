import { Icon } from "@iconify/react";

const Aside = (): JSX.Element => {
  return (
    <aside className="basis-1/4 px-4">
      <div className="w-full">
        <img
          src="https://avatars.githubusercontent.com/u/67964734?v=4"
          alt="avatar"
          className="rounded-[50%] w-full"
        />
      </div>
      <div className="flex flex-col gap-4 my-4">
        <h3 className="text-xl">Orololuwa</h3>
        <button className="bg-gray-100 hover:border-gray-400 border-[1px] border-gray-300 px-4 py-2 w-full rounded-md transition-colors">
          Edit Profile
        </button>
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
