// Add BigInt serialization support
// This is needed because Jest can't serialize BigInt values by default
if (typeof BigInt !== 'undefined') {
  // @ts-ignore: BigInt serialization workaround
  BigInt.prototype.toJSON = function () {
    return this.toString()
  }
}
