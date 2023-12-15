import posts from '../constants/data.json'



function blogsCounter(){

let id
        for (let i = 0; i < posts.length; i++) {
            if (i < posts.length){
                id = i+1

            }
        }
    return id


}
export default blogsCounter