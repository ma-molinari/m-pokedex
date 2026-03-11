import { Image } from "./Image";
import { GenerationTag } from "./GenerationTag";

export const VisualSide = () => {
  return (
    <section className="visual-side">
      <GenerationTag />
      <div className="img-container">
        <Image />
      </div>
    </section>
  );
};
