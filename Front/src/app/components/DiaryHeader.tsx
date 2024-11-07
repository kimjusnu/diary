import Drawer from "./Drawer";
interface DiaryHeaderProps {
  name: string;
  day: number;
}

const DiaryHeader = ({ name, day }: DiaryHeaderProps) => {
  return (
    <div className="flex justify-between items-center mx-4">
      <Drawer />
      <div className="bg-[#F3F4EA] py-2 text-2xl w-fit px-4 rounded-2xl flex justify-center items-center">
        안녕하세요 {name}님. 꾸준한 일기 작성 {day}일째 입니다.😊
      </div>
    </div>
  );
};
export default DiaryHeader;
