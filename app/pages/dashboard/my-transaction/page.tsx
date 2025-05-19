const myTransaction = () => {
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
          DASHBOARD
        </p>
        <p className="max-w-[645px] text-white text-center">
          MY-TRANSACTION section
        </p>
      </div>
    </div>
  );
};

export default myTransaction;
