import {INamesRes, IGoodsDataRes, IGoodsNamesRes} from '@/types/api'

class Api {
  private _apiBase = `./data`

  async getUrl(url: string): Promise<any> {
    const res = await fetch(`${this._apiBase}/${url}`)

    if (!res.ok) {
      throw new Error(`Couldn't fetch ${url}`)
    }

    return await res.json()
  }

  async getData(): Promise<IGoodsDataRes> {
    return await this.getUrl(`data.json`)
  }

  async getNames(): Promise<INamesRes> {
    return await this.getUrl(`names.json`)
  }

  async getGoods(): Promise<IGoodsNamesRes> {
    const res = await Promise.all([this.getData(), this.getNames()])

    if (!res[0].Success) return null

    return {
      goods: res[0].Value.Goods,
      names: res[1]
    }
  }
}

export default new Api()