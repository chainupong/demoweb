import BestApibanner from "../api";

export default class bannerapi extends BestApibanner{
    static async getAllbanner(){
        return await this.api.get('/albums',{}).then(({data})=>data)
    }
}