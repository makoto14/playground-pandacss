import { css } from "../../styled-system/css";
import { HStack, VStack, styled } from "../../styled-system/jsx";

export default function Home() {
  return (
    <main>
      <div
        className={css({
          backgroundColor: "hotpink",
        })}
      >
        content
      </div>
      <VStack gap={10}>
        <span>span1</span>
        <span>span2</span>
      </VStack>
      <HStack gap={10}>
        <div>div1</div>
        <div>div2</div>
      </HStack>
      <styled.a href={"https://www.google.com/"} color="hotpink">
        Link
      </styled.a>
    </main>
  );
}
