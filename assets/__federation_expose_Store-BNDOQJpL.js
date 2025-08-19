import { importShared } from './__federation_fn_import-C51S2QEo.js';

const {atom,useAtom} = await importShared('jotai');


const countAtom = atom(0);
const useCount = () => useAtom(countAtom);

export { useCount as default };
