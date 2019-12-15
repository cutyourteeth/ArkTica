type ValidTargets = 'vanilla' | 'react' | 'vue'

export default function easyParser(domString: string, target: ValidTargets = 'vanilla') {
  if (!target) {
    console.log('html-parser: Haven\'t received a target to compiling to, returns a vanilla DOM object ')
  }
  const parser = new DOMParser()
  const dom = parser.parseFromString(domString, 'text/html')
  return dom
  // pause here
}
