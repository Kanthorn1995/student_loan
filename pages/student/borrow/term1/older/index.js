import Theme from "../../../../../components/theme";
import Link from "next/link";

const Older = (props) => {
  return (
    <Theme {...props}>
      {" "}
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link href="/student/borrow">
            <a>ข้อมูลกู้ยืมกองทุน กยศ.</a>
          </Link>
        </li>
        <li className="breadcrumb-item">
          <Link href="/student/borrow/term1">
            <a>ภาคการศึกษาที่ 1</a>
          </Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          รายเก่า
        </li>
      </ol>
      <div className="box-padding">Older</div>
    </Theme>
  );
};

export default Older;
