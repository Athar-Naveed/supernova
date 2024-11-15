import {create} from "zustand";


type StateType = {
    count:number;
    increment:()=>void;
    decrement:()=>void;
}

const  useStore = create<StateType>((set) => ({
    // state variables
    count:0,
    increment: ()=>set((state:StateType)=>({count:state.count+1})),
    decrement: ()=>set((state:StateType)=>({count:Math.max(0,state.count-1)})),
}))
export default useStore;