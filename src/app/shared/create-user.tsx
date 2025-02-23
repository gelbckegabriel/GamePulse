type Props = {
  openCreate: boolean;
  setOpenCreate: (isOpen: boolean) => void;
};

export const CreateUser = ({ openCreate, setOpenCreate }: Props) => {
    return (
    <>
        {openCreate && (
            <h1>test</h1>
        )}
    </>
    );
};
