export type CompileCommand = {
    command: string | undefined,
    directory: string | undefined,
    file: string | undefined
}

export type CppProperty = {
    name: string | undefined,
    intelliSenseMode: string | undefined,
    compilerPath: string | undefined,
    cStandard: string | undefined,
    cppStandard: string | undefined,
    compilerArgs: string[] | undefined,
    includePath: string[] | undefined,
    defines: string[] | undefined
}