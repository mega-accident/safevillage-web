//layout에서 Wrapper랑 Box 가져오기
import { Wrapper, Box } from "../components/Layout";
import BottomNav from "../components/BottomNav";

function HomePage() {
  return (
    <Wrapper>
      <Box>
        <BottomNav />
      </Box>
    </Wrapper>
  );
}
export default HomePage;