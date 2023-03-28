import _ from 'lodash'
const parseEnv = (env: Record<string, any>) => {
  const envs = _.cloneDeep(env)
  Object.entries(env).forEach(([key, value]) => {
    if (value === 'true' || value === 'false') envs[key] = value === 'true' ? true : false
    else if (!isNaN(+value)) envs[key] = +value
    else if (value == 'null' || value == '') envs[key] = null
    else if (value == 'undefined') envs[key] = undefined
  })
  return envs
}

export { parseEnv }
