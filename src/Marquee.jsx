import Marquee from "react-marquee-slider";
import './marquee.css';

const Example = () => {
    const text = [
        {id:1 , name: 'الخبر الاول وهو الخبر اول واحد'},
        {id:2 , name: 'الخبر الثاني وهو الخبر ثاني واحد'},
        {id:3 , name: 'الخبر الثالث وهو الخبر ثالث واحد'},
        {id:4 , name: 'الخبر الرابع وهو الخبر رابع واحد'},
      ];
  return (
    <div className="father">
  <Marquee velocity={70} minScale={1} resetAfterTries={200}>
    {text.map((el) => (
        <div className="son">
          {el.name}
        </div>
    ))}
  </Marquee>
</div>
  )
}

export default Example