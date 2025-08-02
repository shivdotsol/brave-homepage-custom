const Shortcut = ({ name, url, img }) => {
    return (
        <a
            href={url}
            className="h-fit group mb-5"
            onContextMenu={() => alert("hello")}
        >
            <div className="h-[88px] w-[88px] flex flex-col items-center justify-between">
                <div className="w-16 h-16 flex items-center justify-center bg-[#4c4c4d] rounded-2xl border border-transparent group-hover:border-zinc-500  group-hover:shadow-[0px_5px_40px_0px] group-hover:shadow-zinc-500 transition-all duration-150">
                    <img className="w-14" src={img} />
                </div>
                <p className="text-neutral-200 text-xs font-bold group-hover:text-white">
                    {name}
                </p>
            </div>
        </a>
    );
};

export default Shortcut;
