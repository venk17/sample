import { acceleratorsData } from "../../data/acceleratorsData";
import AcceleratorCard from "./AcceleratorCard";

const AcceleratorsGridSection = () => {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-12">
          {acceleratorsData.map((item) => (
            <AcceleratorCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default AcceleratorsGridSection;
