import SubmitField from "./SubmitField";
import Intro from "./Intro";
const Form = () => {
  return (
    <div className="container mx-auto flex h-[100vh] items-center justify-center">
      <section className="grid max-md:grid-rows-[0.8fr_1fr] md:grid-cols-[1fr_0.7fr]">
        <div className=" max-md:self-center max-md:mt-[7rem] max-md:text-center md:justify-self-end md:self-center md:pl-48 ">
          <Intro />
        </div>
        <div className="md:ml-[-120px] md:mr-[120px] max-md:mx-6">
          <SubmitField />
        </div>
      </section>
    </div>
  );
};
export default Form;
