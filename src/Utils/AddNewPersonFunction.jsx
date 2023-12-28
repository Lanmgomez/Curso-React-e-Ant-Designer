
export const add_new_person = (setDataSource) => {

    const random_number_id = parseInt(Math.random() * 100)

    const new_person = {
        id: random_number_id,
        name: "Name " + random_number_id,
        email: "Email " + random_number_id
    }

    setDataSource(previous => {
        return [...previous, new_person]
    })
  }