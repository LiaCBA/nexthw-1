import Link from "next/link";

export const Sidebar = () => {
  return (
    <div className="top-[80px] flex flex-col gap-[32px] pt-[32px] pb-[32px] pl-[16px] max-w-[201px]">
      <div className="flex items-center gap-[16px]">
        <button className="bg-gray-700 p-[8px] rounded-[6px] w-[40px] h-[40px]">
          <img src="/images/svg/home.svg" alt="home" />
        </button>
        <Link href="/" className="hover:text-[#4980C0]">
          my-home
        </Link>
      </div>
      <div className="flex items-center gap-[16px]">
        <button className="bg-gray-700 p-[8px] rounded-[6px] w-[40px] h-[40px]">
          <img src="/images/svg/edit.svg" alt="edit" />
        </button>
        <Link
          href="/pages/dashboard/my-edit-profile"
          className="hover:text-[#4980C0]">
          my-edit-profile
        </Link>
      </div>
      <div className="flex items-center gap-[16px]">
        <button className="bg-gray-700 p-[8px] rounded-[6px] w-[40px] h-[40px]">
          <img src="/images/svg/contacts.svg" alt="contacts" />
        </button>
        <Link
          href="/pages/dashboard/my-contacts"
          className="hover:text-[#4980C0]">
          my-contacts
        </Link>
      </div>
      <div className="flex items-center gap-[16px]">
        <button className="bg-gray-700 p-[8px] rounded-[6px] w-[40px] h-[40px]">
          <img src="/images/svg/transaction.svg" alt="transaction" />
        </button>
        <Link
          href="/pages/dashboard/my-transaction"
          className="hover:text-[#4980C0]">
          my-transaction
        </Link>
      </div>
      <div className="flex items-center gap-[16px]">
        <button className="bg-gray-700 p-[8px] rounded-[6px] w-[40px] h-[40px]">
          <img src="/images/svg/profile.svg" alt="profile" />
        </button>
        <Link
          href="/pages/dashboard/my-profile"
          className="hover:text-[#4980C0]">
          my-profile
        </Link>
      </div>
    </div>
  );
};
