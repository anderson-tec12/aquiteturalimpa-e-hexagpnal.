export default interface UserCase<IN, OUT>{
  runner(entry:IN): Promise<OUT>
}
