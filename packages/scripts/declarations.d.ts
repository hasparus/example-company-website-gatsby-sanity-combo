// We override executive's typings because they were pitiful
declare module "executive" {
  type ExecResult = {
    status: number;
    stdout: string;
    stderr: string;
  };

  function exec(
    command: string | any[],
    options?: any,
    callback?: any
  ): ExecResult;

  namespace exec {
    export function interactive(
      command: string | any[],
      options?: any,
      callback?: any
    ): Promise<any>;
    export function parallel(
      command: string | any[],
      options?: any,
      callback?: any
    ): Promise<any>;
    export function quiet(
      command: string | any[],
      options?: any,
      callback?: any
    ): Promise<any>;
    export function serial(
      command: string | any[],
      options?: any,
      callback?: any
    ): Promise<any>;
    export function strict(
      command: string | any[],
      options?: any,
      callback?: any
    ): Promise<any>;
    export function sync(
      command: string | any[],
      options?: any,
      callback?: any
    ): any;
  }

  export = exec;
}
