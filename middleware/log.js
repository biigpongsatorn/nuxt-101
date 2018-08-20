export default function (context) {
  console.log('Clinet = ', context.isClient)
  console.log('Server = ', context.isServer)
}