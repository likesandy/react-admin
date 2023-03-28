import _ from 'lodash'

class Helper {
  private _env: Record<string, any> = {}

  get env() {
    const envs = _.cloneDeep(import.meta.env)
    Object.entries(envs).forEach(([key, value]) => {
      if (value === 'true' || value === 'false') envs[key] = value === 'true' ? true : false
      else if (!isNaN(+value)) envs[key] = +value
      else if (value == 'null' || value == '') envs[key] = null
      else if (value == 'undefined') envs[key] = undefined
    })
    return envs
  }
}

const helper = new Helper()
const env = helper.env

export default Helper

export { env }
