interface DividerProps {
  id?: string;
}

export const Divider: React.FC<DividerProps> = ({ id }) => {
  return <hr id={id} className="my-6" />;
};
export default Divider;
