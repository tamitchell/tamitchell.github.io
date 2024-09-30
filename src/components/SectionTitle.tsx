interface SectionTitleProps {
    title: string;
  }
  
  export default function SectionTitle({ title }: SectionTitleProps): JSX.Element {
    return (
      <h2 className="text-2xl font-bold mb-4 pb-2 text-blue-cornflower border-b-4 border-blue-cornflower">
        {title}
      </h2>
    );
  }