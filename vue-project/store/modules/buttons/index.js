import getters from "./getters"

const buttonsModule = {
    state(){
        return {
            button_classes: {
                add: "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center",
                remove: "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            }
        }
    },
    getters
}

export default buttonsModule