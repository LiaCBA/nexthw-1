const Home = () => {
  return (
    <div className="relative m-auto w-full max-w-[1440px]">
      <img
        className="bg-cover opacity-60"
        src="/images/png/football.jpg"
        alt="football players"
        width={1440}
        height={899}
      />

      <div className="top-0 left-0 absolute flex flex-col justify-center items-center w-full h-full">
        <p className="max-w-[645px] font-bold text-[40px] text-white text-center">
          DON'T JUST WATCH FOOTBALL PLAY IT!
        </p>
        <p className="max-w-[645px] text-white text-center">
          Create your Football Fantasy team to earn points based on player
          performance and stand a chance to win prizes
        </p>
        <div className="inline-block relative mt-[24px]">
          <div className="absolute inset-0 border-[1px] border-white -translate-x-1.5 translate-y-1.5"></div>
          <button className="relative bg-[#ED432E] pt-[16px] pr-[20px] pb-[16px] pl-[20px] font-bold cursor-pointer">
            Create Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
