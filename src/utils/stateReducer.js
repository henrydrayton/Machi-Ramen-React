export default function reducer (state, action) {
    switch(action.type) {
        case 'setLoggedInUser': {
            return {
                ...state,
                loggedInUser: action.data
            }
        }
        case 'setToken': {
			return {
				...state,
				auth: {
					...state.auth,
					token: action.data
				}
			}
		}
        case 'setCategories': {
			return {
				...state,
				categories: action.data
			}
		}
        case 'setItems':{
			return {
				...state,
				items: action.data
			}
		}
		case 'deleteItem': {
			const updatedItems = state.items.filter((item) => {
				return item.id !== parseInt(action.data)
			})
			return {
				...state,
				items: updatedItems
			}
		}
		case 'addItem': {
			return {
				...state,
				items: [action.data, ...state.items]
			}
		}
		case 'updateItem': {
			const item = state.items.find((item) => item.id == action.data.id)
			const theRest = state.items.filter((item) => item.id != action.data.id)
			const updatedItem = Object.assign(item, action.data)
			return {
				...state,
				items: [updatedItem, ...theRest]
			}

		}
		default: return state
    }
}