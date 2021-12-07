import axios from "axios";

export default {
    state: () => ({
        hotels: []
    }),

    actions: {
        fetchAllHotels({commit}) {

            axios.get(`http://localhost:4000/apiv1/hotel`)
                .then(response => {
                    commit('setAllHotels', response.data)
                })
        },
        addNewHotel({commit}, newHotel) {
            console.log(777)
            commit('setNewHotel', newHotel)
        }
    },

    mutations: {
        setAllHotels(state, hotels) {
            state.hotels = hotels;
        },
        setNewHotel(state, newHotel){
            state.hotels = [...state.hotels, newHotel]
        }
    },

    getters: {
        getAllHotels(state) {
            return state.hotels;
        }
    }
}
