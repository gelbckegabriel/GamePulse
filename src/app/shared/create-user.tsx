import {
  useAnimate,
  useDragControls,
  useMotionValue,
  motion,
} from "framer-motion";
import useMeasure from "react-use-measure";

type Props = {
  openCreate: boolean;
  setOpenCreate: (isOpen: boolean) => void;
};

export const CreateUser = ({ openCreate, setOpenCreate }: Props) => {
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();

  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", {
      y: [yStart, height],
    });

    setOpenCreate(false);
  };

  return (
    <>
      {openCreate && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-background/50"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              ease: "easeInOut",
            }}
            className="absolute bottom-0 h-[75vh] w-full overflow-hidden rounded-t-3xl bg-backgroundModal"
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{
              top: 0,

              bottom: 0,
            }}
            dragElastic={{
              top: 0,

              bottom: 0.5,
            }}
          >
            <div className="absolute left-0 right-0 top-0 z-10 flex justify-center p-4">
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className="h-2 w-14 cursor-grab touch-none rounded-full bg-darkGray active:cursor-grabbing"
              ></button>
            </div>

            <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12">
              <div className="mx-auto max-w-2xl space-y-4 text-neutral-400 text-white">
                <h2 className="text-4xl font-bold">Create a new account</h2>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};
