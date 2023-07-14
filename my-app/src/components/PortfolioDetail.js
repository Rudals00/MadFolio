import { useParams } from "react-router-dom";

function PortfolioDetail() {
  let { name } = useParams();

  return (
    <div>
      <h2>{name}'s Portfolio</h2>
      {/* 여기에 포트폴리오 상세 정보 출력 */}
    </div>
  );
}
export default PortfolioDetail;