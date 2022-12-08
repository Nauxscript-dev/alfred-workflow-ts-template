import { Selection } from "./types"

export default function run(argv: Array<string | boolean >) {
  const query = argv[0]
  const result:{
    items: Selection[]
  } = {
    items: [{
      title: `This is a selection example, and you are inputing ${query}`,
    }]
  }
  // eslint-disable-next-line no-console
  console.log(JSON.stringify(result, null, ''))
}
