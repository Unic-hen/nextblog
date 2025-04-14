const Tag = ({ tag }: { tag: string }) => {
  return (
    <span className="pr-4 text-lg">
      # <span>{tag}</span>
    </span>
  );
};
export default Tag;
