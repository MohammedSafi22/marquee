import Marquee from 'react-double-marquee';

export default function Test() {
  return (
    <div
      style={{
        width: '100%',
        whiteSpace: 'nowrap',
      }}
    >
      <Marquee scrollWhen={"overflow"} childMargin={"100px"}>
        Some really really really really really long text
      </Marquee>
    </div>
  );
}