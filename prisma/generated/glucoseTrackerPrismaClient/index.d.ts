
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model SensorRecords
 * 
 */
export type SensorRecords = {
  id: number
  label: string
  session_id: string
  sqv: number
  direction: string
  date: Date
  date_string: string
}

/**
 * Model Labels
 * 
 */
export type Labels = {
  sensor_serial_no: string
  label: string | null
  time_created: Date
}

/**
 * Model DatabaseKeys
 * 
 */
export type DatabaseKeys = {
  id: string
  description: string
  stringKey: string | null
  intKey: number | null
  boolKey: boolean | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more SensorRecords
 * const sensorRecords = await prisma.sensorRecords.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more SensorRecords
   * const sensorRecords = await prisma.sensorRecords.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.sensorRecords`: Exposes CRUD operations for the **SensorRecords** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SensorRecords
    * const sensorRecords = await prisma.sensorRecords.findMany()
    * ```
    */
  get sensorRecords(): Prisma.SensorRecordsDelegate<GlobalReject>;

  /**
   * `prisma.labels`: Exposes CRUD operations for the **Labels** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Labels
    * const labels = await prisma.labels.findMany()
    * ```
    */
  get labels(): Prisma.LabelsDelegate<GlobalReject>;

  /**
   * `prisma.databaseKeys`: Exposes CRUD operations for the **DatabaseKeys** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DatabaseKeys
    * const databaseKeys = await prisma.databaseKeys.findMany()
    * ```
    */
  get databaseKeys(): Prisma.DatabaseKeysDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.6.1
   * Query Engine version: 694eea289a8462c80264df36757e4fdc129b1b32
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    SensorRecords: 'SensorRecords',
    Labels: 'Labels',
    DatabaseKeys: 'DatabaseKeys'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model SensorRecords
   */


  export type AggregateSensorRecords = {
    _count: SensorRecordsCountAggregateOutputType | null
    _avg: SensorRecordsAvgAggregateOutputType | null
    _sum: SensorRecordsSumAggregateOutputType | null
    _min: SensorRecordsMinAggregateOutputType | null
    _max: SensorRecordsMaxAggregateOutputType | null
  }

  export type SensorRecordsAvgAggregateOutputType = {
    id: number | null
    sqv: number | null
  }

  export type SensorRecordsSumAggregateOutputType = {
    id: number | null
    sqv: number | null
  }

  export type SensorRecordsMinAggregateOutputType = {
    id: number | null
    label: string | null
    session_id: string | null
    sqv: number | null
    direction: string | null
    date: Date | null
    date_string: string | null
  }

  export type SensorRecordsMaxAggregateOutputType = {
    id: number | null
    label: string | null
    session_id: string | null
    sqv: number | null
    direction: string | null
    date: Date | null
    date_string: string | null
  }

  export type SensorRecordsCountAggregateOutputType = {
    id: number
    label: number
    session_id: number
    sqv: number
    direction: number
    date: number
    date_string: number
    _all: number
  }


  export type SensorRecordsAvgAggregateInputType = {
    id?: true
    sqv?: true
  }

  export type SensorRecordsSumAggregateInputType = {
    id?: true
    sqv?: true
  }

  export type SensorRecordsMinAggregateInputType = {
    id?: true
    label?: true
    session_id?: true
    sqv?: true
    direction?: true
    date?: true
    date_string?: true
  }

  export type SensorRecordsMaxAggregateInputType = {
    id?: true
    label?: true
    session_id?: true
    sqv?: true
    direction?: true
    date?: true
    date_string?: true
  }

  export type SensorRecordsCountAggregateInputType = {
    id?: true
    label?: true
    session_id?: true
    sqv?: true
    direction?: true
    date?: true
    date_string?: true
    _all?: true
  }

  export type SensorRecordsAggregateArgs = {
    /**
     * Filter which SensorRecords to aggregate.
     * 
    **/
    where?: SensorRecordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SensorRecords to fetch.
     * 
    **/
    orderBy?: Enumerable<SensorRecordsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SensorRecordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SensorRecords from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SensorRecords.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SensorRecords
    **/
    _count?: true | SensorRecordsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SensorRecordsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SensorRecordsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SensorRecordsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SensorRecordsMaxAggregateInputType
  }

  export type GetSensorRecordsAggregateType<T extends SensorRecordsAggregateArgs> = {
        [P in keyof T & keyof AggregateSensorRecords]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSensorRecords[P]>
      : GetScalarType<T[P], AggregateSensorRecords[P]>
  }




  export type SensorRecordsGroupByArgs = {
    where?: SensorRecordsWhereInput
    orderBy?: Enumerable<SensorRecordsOrderByWithAggregationInput>
    by: Array<SensorRecordsScalarFieldEnum>
    having?: SensorRecordsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SensorRecordsCountAggregateInputType | true
    _avg?: SensorRecordsAvgAggregateInputType
    _sum?: SensorRecordsSumAggregateInputType
    _min?: SensorRecordsMinAggregateInputType
    _max?: SensorRecordsMaxAggregateInputType
  }


  export type SensorRecordsGroupByOutputType = {
    id: number
    label: string
    session_id: string
    sqv: number
    direction: string
    date: Date
    date_string: string
    _count: SensorRecordsCountAggregateOutputType | null
    _avg: SensorRecordsAvgAggregateOutputType | null
    _sum: SensorRecordsSumAggregateOutputType | null
    _min: SensorRecordsMinAggregateOutputType | null
    _max: SensorRecordsMaxAggregateOutputType | null
  }

  type GetSensorRecordsGroupByPayload<T extends SensorRecordsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SensorRecordsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SensorRecordsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SensorRecordsGroupByOutputType[P]>
            : GetScalarType<T[P], SensorRecordsGroupByOutputType[P]>
        }
      >
    >


  export type SensorRecordsSelect = {
    id?: boolean
    label?: boolean
    session_id?: boolean
    sqv?: boolean
    direction?: boolean
    date?: boolean
    date_string?: boolean
  }


  export type SensorRecordsGetPayload<S extends boolean | null | undefined | SensorRecordsArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? SensorRecords :
    S extends undefined ? never :
    S extends { include: any } & (SensorRecordsArgs | SensorRecordsFindManyArgs)
    ? SensorRecords 
    : S extends { select: any } & (SensorRecordsArgs | SensorRecordsFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof SensorRecords ? SensorRecords[P] : never
  } 
      : SensorRecords


  type SensorRecordsCountArgs = Merge<
    Omit<SensorRecordsFindManyArgs, 'select' | 'include'> & {
      select?: SensorRecordsCountAggregateInputType | true
    }
  >

  export interface SensorRecordsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one SensorRecords that matches the filter.
     * @param {SensorRecordsFindUniqueArgs} args - Arguments to find a SensorRecords
     * @example
     * // Get one SensorRecords
     * const sensorRecords = await prisma.sensorRecords.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SensorRecordsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SensorRecordsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SensorRecords'> extends True ? Prisma__SensorRecordsClient<SensorRecordsGetPayload<T>> : Prisma__SensorRecordsClient<SensorRecordsGetPayload<T> | null, null>

    /**
     * Find the first SensorRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorRecordsFindFirstArgs} args - Arguments to find a SensorRecords
     * @example
     * // Get one SensorRecords
     * const sensorRecords = await prisma.sensorRecords.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SensorRecordsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SensorRecordsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SensorRecords'> extends True ? Prisma__SensorRecordsClient<SensorRecordsGetPayload<T>> : Prisma__SensorRecordsClient<SensorRecordsGetPayload<T> | null, null>

    /**
     * Find zero or more SensorRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorRecordsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SensorRecords
     * const sensorRecords = await prisma.sensorRecords.findMany()
     * 
     * // Get first 10 SensorRecords
     * const sensorRecords = await prisma.sensorRecords.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sensorRecordsWithIdOnly = await prisma.sensorRecords.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SensorRecordsFindManyArgs>(
      args?: SelectSubset<T, SensorRecordsFindManyArgs>
    ): PrismaPromise<Array<SensorRecordsGetPayload<T>>>

    /**
     * Create a SensorRecords.
     * @param {SensorRecordsCreateArgs} args - Arguments to create a SensorRecords.
     * @example
     * // Create one SensorRecords
     * const SensorRecords = await prisma.sensorRecords.create({
     *   data: {
     *     // ... data to create a SensorRecords
     *   }
     * })
     * 
    **/
    create<T extends SensorRecordsCreateArgs>(
      args: SelectSubset<T, SensorRecordsCreateArgs>
    ): Prisma__SensorRecordsClient<SensorRecordsGetPayload<T>>

    /**
     * Create many SensorRecords.
     *     @param {SensorRecordsCreateManyArgs} args - Arguments to create many SensorRecords.
     *     @example
     *     // Create many SensorRecords
     *     const sensorRecords = await prisma.sensorRecords.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SensorRecordsCreateManyArgs>(
      args?: SelectSubset<T, SensorRecordsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a SensorRecords.
     * @param {SensorRecordsDeleteArgs} args - Arguments to delete one SensorRecords.
     * @example
     * // Delete one SensorRecords
     * const SensorRecords = await prisma.sensorRecords.delete({
     *   where: {
     *     // ... filter to delete one SensorRecords
     *   }
     * })
     * 
    **/
    delete<T extends SensorRecordsDeleteArgs>(
      args: SelectSubset<T, SensorRecordsDeleteArgs>
    ): Prisma__SensorRecordsClient<SensorRecordsGetPayload<T>>

    /**
     * Update one SensorRecords.
     * @param {SensorRecordsUpdateArgs} args - Arguments to update one SensorRecords.
     * @example
     * // Update one SensorRecords
     * const sensorRecords = await prisma.sensorRecords.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SensorRecordsUpdateArgs>(
      args: SelectSubset<T, SensorRecordsUpdateArgs>
    ): Prisma__SensorRecordsClient<SensorRecordsGetPayload<T>>

    /**
     * Delete zero or more SensorRecords.
     * @param {SensorRecordsDeleteManyArgs} args - Arguments to filter SensorRecords to delete.
     * @example
     * // Delete a few SensorRecords
     * const { count } = await prisma.sensorRecords.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SensorRecordsDeleteManyArgs>(
      args?: SelectSubset<T, SensorRecordsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more SensorRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorRecordsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SensorRecords
     * const sensorRecords = await prisma.sensorRecords.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SensorRecordsUpdateManyArgs>(
      args: SelectSubset<T, SensorRecordsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one SensorRecords.
     * @param {SensorRecordsUpsertArgs} args - Arguments to update or create a SensorRecords.
     * @example
     * // Update or create a SensorRecords
     * const sensorRecords = await prisma.sensorRecords.upsert({
     *   create: {
     *     // ... data to create a SensorRecords
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SensorRecords we want to update
     *   }
     * })
    **/
    upsert<T extends SensorRecordsUpsertArgs>(
      args: SelectSubset<T, SensorRecordsUpsertArgs>
    ): Prisma__SensorRecordsClient<SensorRecordsGetPayload<T>>

    /**
     * Find one SensorRecords that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {SensorRecordsFindUniqueOrThrowArgs} args - Arguments to find a SensorRecords
     * @example
     * // Get one SensorRecords
     * const sensorRecords = await prisma.sensorRecords.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SensorRecordsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SensorRecordsFindUniqueOrThrowArgs>
    ): Prisma__SensorRecordsClient<SensorRecordsGetPayload<T>>

    /**
     * Find the first SensorRecords that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorRecordsFindFirstOrThrowArgs} args - Arguments to find a SensorRecords
     * @example
     * // Get one SensorRecords
     * const sensorRecords = await prisma.sensorRecords.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SensorRecordsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SensorRecordsFindFirstOrThrowArgs>
    ): Prisma__SensorRecordsClient<SensorRecordsGetPayload<T>>

    /**
     * Count the number of SensorRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorRecordsCountArgs} args - Arguments to filter SensorRecords to count.
     * @example
     * // Count the number of SensorRecords
     * const count = await prisma.sensorRecords.count({
     *   where: {
     *     // ... the filter for the SensorRecords we want to count
     *   }
     * })
    **/
    count<T extends SensorRecordsCountArgs>(
      args?: Subset<T, SensorRecordsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SensorRecordsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SensorRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorRecordsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SensorRecordsAggregateArgs>(args: Subset<T, SensorRecordsAggregateArgs>): PrismaPromise<GetSensorRecordsAggregateType<T>>

    /**
     * Group by SensorRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorRecordsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SensorRecordsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SensorRecordsGroupByArgs['orderBy'] }
        : { orderBy?: SensorRecordsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SensorRecordsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSensorRecordsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for SensorRecords.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SensorRecordsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * SensorRecords base type for findUnique actions
   */
  export type SensorRecordsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the SensorRecords
     * 
    **/
    select?: SensorRecordsSelect | null
    /**
     * Filter, which SensorRecords to fetch.
     * 
    **/
    where: SensorRecordsWhereUniqueInput
  }

  /**
   * SensorRecords: findUnique
   */
  export interface SensorRecordsFindUniqueArgs extends SensorRecordsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SensorRecords base type for findFirst actions
   */
  export type SensorRecordsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the SensorRecords
     * 
    **/
    select?: SensorRecordsSelect | null
    /**
     * Filter, which SensorRecords to fetch.
     * 
    **/
    where?: SensorRecordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SensorRecords to fetch.
     * 
    **/
    orderBy?: Enumerable<SensorRecordsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SensorRecords.
     * 
    **/
    cursor?: SensorRecordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SensorRecords from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SensorRecords.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SensorRecords.
     * 
    **/
    distinct?: Enumerable<SensorRecordsScalarFieldEnum>
  }

  /**
   * SensorRecords: findFirst
   */
  export interface SensorRecordsFindFirstArgs extends SensorRecordsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SensorRecords findMany
   */
  export type SensorRecordsFindManyArgs = {
    /**
     * Select specific fields to fetch from the SensorRecords
     * 
    **/
    select?: SensorRecordsSelect | null
    /**
     * Filter, which SensorRecords to fetch.
     * 
    **/
    where?: SensorRecordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SensorRecords to fetch.
     * 
    **/
    orderBy?: Enumerable<SensorRecordsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SensorRecords.
     * 
    **/
    cursor?: SensorRecordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SensorRecords from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SensorRecords.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SensorRecordsScalarFieldEnum>
  }


  /**
   * SensorRecords create
   */
  export type SensorRecordsCreateArgs = {
    /**
     * Select specific fields to fetch from the SensorRecords
     * 
    **/
    select?: SensorRecordsSelect | null
    /**
     * The data needed to create a SensorRecords.
     * 
    **/
    data: XOR<SensorRecordsCreateInput, SensorRecordsUncheckedCreateInput>
  }


  /**
   * SensorRecords createMany
   */
  export type SensorRecordsCreateManyArgs = {
    /**
     * The data used to create many SensorRecords.
     * 
    **/
    data: Enumerable<SensorRecordsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * SensorRecords update
   */
  export type SensorRecordsUpdateArgs = {
    /**
     * Select specific fields to fetch from the SensorRecords
     * 
    **/
    select?: SensorRecordsSelect | null
    /**
     * The data needed to update a SensorRecords.
     * 
    **/
    data: XOR<SensorRecordsUpdateInput, SensorRecordsUncheckedUpdateInput>
    /**
     * Choose, which SensorRecords to update.
     * 
    **/
    where: SensorRecordsWhereUniqueInput
  }


  /**
   * SensorRecords updateMany
   */
  export type SensorRecordsUpdateManyArgs = {
    /**
     * The data used to update SensorRecords.
     * 
    **/
    data: XOR<SensorRecordsUpdateManyMutationInput, SensorRecordsUncheckedUpdateManyInput>
    /**
     * Filter which SensorRecords to update
     * 
    **/
    where?: SensorRecordsWhereInput
  }


  /**
   * SensorRecords upsert
   */
  export type SensorRecordsUpsertArgs = {
    /**
     * Select specific fields to fetch from the SensorRecords
     * 
    **/
    select?: SensorRecordsSelect | null
    /**
     * The filter to search for the SensorRecords to update in case it exists.
     * 
    **/
    where: SensorRecordsWhereUniqueInput
    /**
     * In case the SensorRecords found by the `where` argument doesn't exist, create a new SensorRecords with this data.
     * 
    **/
    create: XOR<SensorRecordsCreateInput, SensorRecordsUncheckedCreateInput>
    /**
     * In case the SensorRecords was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SensorRecordsUpdateInput, SensorRecordsUncheckedUpdateInput>
  }


  /**
   * SensorRecords delete
   */
  export type SensorRecordsDeleteArgs = {
    /**
     * Select specific fields to fetch from the SensorRecords
     * 
    **/
    select?: SensorRecordsSelect | null
    /**
     * Filter which SensorRecords to delete.
     * 
    **/
    where: SensorRecordsWhereUniqueInput
  }


  /**
   * SensorRecords deleteMany
   */
  export type SensorRecordsDeleteManyArgs = {
    /**
     * Filter which SensorRecords to delete
     * 
    **/
    where?: SensorRecordsWhereInput
  }


  /**
   * SensorRecords: findUniqueOrThrow
   */
  export type SensorRecordsFindUniqueOrThrowArgs = SensorRecordsFindUniqueArgsBase
      

  /**
   * SensorRecords: findFirstOrThrow
   */
  export type SensorRecordsFindFirstOrThrowArgs = SensorRecordsFindFirstArgsBase
      

  /**
   * SensorRecords without action
   */
  export type SensorRecordsArgs = {
    /**
     * Select specific fields to fetch from the SensorRecords
     * 
    **/
    select?: SensorRecordsSelect | null
  }



  /**
   * Model Labels
   */


  export type AggregateLabels = {
    _count: LabelsCountAggregateOutputType | null
    _min: LabelsMinAggregateOutputType | null
    _max: LabelsMaxAggregateOutputType | null
  }

  export type LabelsMinAggregateOutputType = {
    sensor_serial_no: string | null
    label: string | null
    time_created: Date | null
  }

  export type LabelsMaxAggregateOutputType = {
    sensor_serial_no: string | null
    label: string | null
    time_created: Date | null
  }

  export type LabelsCountAggregateOutputType = {
    sensor_serial_no: number
    label: number
    time_created: number
    _all: number
  }


  export type LabelsMinAggregateInputType = {
    sensor_serial_no?: true
    label?: true
    time_created?: true
  }

  export type LabelsMaxAggregateInputType = {
    sensor_serial_no?: true
    label?: true
    time_created?: true
  }

  export type LabelsCountAggregateInputType = {
    sensor_serial_no?: true
    label?: true
    time_created?: true
    _all?: true
  }

  export type LabelsAggregateArgs = {
    /**
     * Filter which Labels to aggregate.
     * 
    **/
    where?: LabelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Labels to fetch.
     * 
    **/
    orderBy?: Enumerable<LabelsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: LabelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Labels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Labels.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Labels
    **/
    _count?: true | LabelsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LabelsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LabelsMaxAggregateInputType
  }

  export type GetLabelsAggregateType<T extends LabelsAggregateArgs> = {
        [P in keyof T & keyof AggregateLabels]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLabels[P]>
      : GetScalarType<T[P], AggregateLabels[P]>
  }




  export type LabelsGroupByArgs = {
    where?: LabelsWhereInput
    orderBy?: Enumerable<LabelsOrderByWithAggregationInput>
    by: Array<LabelsScalarFieldEnum>
    having?: LabelsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LabelsCountAggregateInputType | true
    _min?: LabelsMinAggregateInputType
    _max?: LabelsMaxAggregateInputType
  }


  export type LabelsGroupByOutputType = {
    sensor_serial_no: string
    label: string | null
    time_created: Date
    _count: LabelsCountAggregateOutputType | null
    _min: LabelsMinAggregateOutputType | null
    _max: LabelsMaxAggregateOutputType | null
  }

  type GetLabelsGroupByPayload<T extends LabelsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<LabelsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LabelsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LabelsGroupByOutputType[P]>
            : GetScalarType<T[P], LabelsGroupByOutputType[P]>
        }
      >
    >


  export type LabelsSelect = {
    sensor_serial_no?: boolean
    label?: boolean
    time_created?: boolean
  }


  export type LabelsGetPayload<S extends boolean | null | undefined | LabelsArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Labels :
    S extends undefined ? never :
    S extends { include: any } & (LabelsArgs | LabelsFindManyArgs)
    ? Labels 
    : S extends { select: any } & (LabelsArgs | LabelsFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Labels ? Labels[P] : never
  } 
      : Labels


  type LabelsCountArgs = Merge<
    Omit<LabelsFindManyArgs, 'select' | 'include'> & {
      select?: LabelsCountAggregateInputType | true
    }
  >

  export interface LabelsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Labels that matches the filter.
     * @param {LabelsFindUniqueArgs} args - Arguments to find a Labels
     * @example
     * // Get one Labels
     * const labels = await prisma.labels.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LabelsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LabelsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Labels'> extends True ? Prisma__LabelsClient<LabelsGetPayload<T>> : Prisma__LabelsClient<LabelsGetPayload<T> | null, null>

    /**
     * Find the first Labels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabelsFindFirstArgs} args - Arguments to find a Labels
     * @example
     * // Get one Labels
     * const labels = await prisma.labels.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LabelsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LabelsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Labels'> extends True ? Prisma__LabelsClient<LabelsGetPayload<T>> : Prisma__LabelsClient<LabelsGetPayload<T> | null, null>

    /**
     * Find zero or more Labels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabelsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Labels
     * const labels = await prisma.labels.findMany()
     * 
     * // Get first 10 Labels
     * const labels = await prisma.labels.findMany({ take: 10 })
     * 
     * // Only select the `sensor_serial_no`
     * const labelsWithSensor_serial_noOnly = await prisma.labels.findMany({ select: { sensor_serial_no: true } })
     * 
    **/
    findMany<T extends LabelsFindManyArgs>(
      args?: SelectSubset<T, LabelsFindManyArgs>
    ): PrismaPromise<Array<LabelsGetPayload<T>>>

    /**
     * Create a Labels.
     * @param {LabelsCreateArgs} args - Arguments to create a Labels.
     * @example
     * // Create one Labels
     * const Labels = await prisma.labels.create({
     *   data: {
     *     // ... data to create a Labels
     *   }
     * })
     * 
    **/
    create<T extends LabelsCreateArgs>(
      args: SelectSubset<T, LabelsCreateArgs>
    ): Prisma__LabelsClient<LabelsGetPayload<T>>

    /**
     * Create many Labels.
     *     @param {LabelsCreateManyArgs} args - Arguments to create many Labels.
     *     @example
     *     // Create many Labels
     *     const labels = await prisma.labels.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LabelsCreateManyArgs>(
      args?: SelectSubset<T, LabelsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Labels.
     * @param {LabelsDeleteArgs} args - Arguments to delete one Labels.
     * @example
     * // Delete one Labels
     * const Labels = await prisma.labels.delete({
     *   where: {
     *     // ... filter to delete one Labels
     *   }
     * })
     * 
    **/
    delete<T extends LabelsDeleteArgs>(
      args: SelectSubset<T, LabelsDeleteArgs>
    ): Prisma__LabelsClient<LabelsGetPayload<T>>

    /**
     * Update one Labels.
     * @param {LabelsUpdateArgs} args - Arguments to update one Labels.
     * @example
     * // Update one Labels
     * const labels = await prisma.labels.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LabelsUpdateArgs>(
      args: SelectSubset<T, LabelsUpdateArgs>
    ): Prisma__LabelsClient<LabelsGetPayload<T>>

    /**
     * Delete zero or more Labels.
     * @param {LabelsDeleteManyArgs} args - Arguments to filter Labels to delete.
     * @example
     * // Delete a few Labels
     * const { count } = await prisma.labels.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LabelsDeleteManyArgs>(
      args?: SelectSubset<T, LabelsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Labels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabelsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Labels
     * const labels = await prisma.labels.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LabelsUpdateManyArgs>(
      args: SelectSubset<T, LabelsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Labels.
     * @param {LabelsUpsertArgs} args - Arguments to update or create a Labels.
     * @example
     * // Update or create a Labels
     * const labels = await prisma.labels.upsert({
     *   create: {
     *     // ... data to create a Labels
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Labels we want to update
     *   }
     * })
    **/
    upsert<T extends LabelsUpsertArgs>(
      args: SelectSubset<T, LabelsUpsertArgs>
    ): Prisma__LabelsClient<LabelsGetPayload<T>>

    /**
     * Find one Labels that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {LabelsFindUniqueOrThrowArgs} args - Arguments to find a Labels
     * @example
     * // Get one Labels
     * const labels = await prisma.labels.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LabelsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, LabelsFindUniqueOrThrowArgs>
    ): Prisma__LabelsClient<LabelsGetPayload<T>>

    /**
     * Find the first Labels that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabelsFindFirstOrThrowArgs} args - Arguments to find a Labels
     * @example
     * // Get one Labels
     * const labels = await prisma.labels.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LabelsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, LabelsFindFirstOrThrowArgs>
    ): Prisma__LabelsClient<LabelsGetPayload<T>>

    /**
     * Count the number of Labels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabelsCountArgs} args - Arguments to filter Labels to count.
     * @example
     * // Count the number of Labels
     * const count = await prisma.labels.count({
     *   where: {
     *     // ... the filter for the Labels we want to count
     *   }
     * })
    **/
    count<T extends LabelsCountArgs>(
      args?: Subset<T, LabelsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LabelsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Labels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabelsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LabelsAggregateArgs>(args: Subset<T, LabelsAggregateArgs>): PrismaPromise<GetLabelsAggregateType<T>>

    /**
     * Group by Labels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabelsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LabelsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LabelsGroupByArgs['orderBy'] }
        : { orderBy?: LabelsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LabelsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLabelsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Labels.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LabelsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Labels base type for findUnique actions
   */
  export type LabelsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Labels
     * 
    **/
    select?: LabelsSelect | null
    /**
     * Filter, which Labels to fetch.
     * 
    **/
    where: LabelsWhereUniqueInput
  }

  /**
   * Labels: findUnique
   */
  export interface LabelsFindUniqueArgs extends LabelsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Labels base type for findFirst actions
   */
  export type LabelsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Labels
     * 
    **/
    select?: LabelsSelect | null
    /**
     * Filter, which Labels to fetch.
     * 
    **/
    where?: LabelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Labels to fetch.
     * 
    **/
    orderBy?: Enumerable<LabelsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Labels.
     * 
    **/
    cursor?: LabelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Labels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Labels.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Labels.
     * 
    **/
    distinct?: Enumerable<LabelsScalarFieldEnum>
  }

  /**
   * Labels: findFirst
   */
  export interface LabelsFindFirstArgs extends LabelsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Labels findMany
   */
  export type LabelsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Labels
     * 
    **/
    select?: LabelsSelect | null
    /**
     * Filter, which Labels to fetch.
     * 
    **/
    where?: LabelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Labels to fetch.
     * 
    **/
    orderBy?: Enumerable<LabelsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Labels.
     * 
    **/
    cursor?: LabelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Labels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Labels.
     * 
    **/
    skip?: number
    distinct?: Enumerable<LabelsScalarFieldEnum>
  }


  /**
   * Labels create
   */
  export type LabelsCreateArgs = {
    /**
     * Select specific fields to fetch from the Labels
     * 
    **/
    select?: LabelsSelect | null
    /**
     * The data needed to create a Labels.
     * 
    **/
    data: XOR<LabelsCreateInput, LabelsUncheckedCreateInput>
  }


  /**
   * Labels createMany
   */
  export type LabelsCreateManyArgs = {
    /**
     * The data used to create many Labels.
     * 
    **/
    data: Enumerable<LabelsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Labels update
   */
  export type LabelsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Labels
     * 
    **/
    select?: LabelsSelect | null
    /**
     * The data needed to update a Labels.
     * 
    **/
    data: XOR<LabelsUpdateInput, LabelsUncheckedUpdateInput>
    /**
     * Choose, which Labels to update.
     * 
    **/
    where: LabelsWhereUniqueInput
  }


  /**
   * Labels updateMany
   */
  export type LabelsUpdateManyArgs = {
    /**
     * The data used to update Labels.
     * 
    **/
    data: XOR<LabelsUpdateManyMutationInput, LabelsUncheckedUpdateManyInput>
    /**
     * Filter which Labels to update
     * 
    **/
    where?: LabelsWhereInput
  }


  /**
   * Labels upsert
   */
  export type LabelsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Labels
     * 
    **/
    select?: LabelsSelect | null
    /**
     * The filter to search for the Labels to update in case it exists.
     * 
    **/
    where: LabelsWhereUniqueInput
    /**
     * In case the Labels found by the `where` argument doesn't exist, create a new Labels with this data.
     * 
    **/
    create: XOR<LabelsCreateInput, LabelsUncheckedCreateInput>
    /**
     * In case the Labels was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<LabelsUpdateInput, LabelsUncheckedUpdateInput>
  }


  /**
   * Labels delete
   */
  export type LabelsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Labels
     * 
    **/
    select?: LabelsSelect | null
    /**
     * Filter which Labels to delete.
     * 
    **/
    where: LabelsWhereUniqueInput
  }


  /**
   * Labels deleteMany
   */
  export type LabelsDeleteManyArgs = {
    /**
     * Filter which Labels to delete
     * 
    **/
    where?: LabelsWhereInput
  }


  /**
   * Labels: findUniqueOrThrow
   */
  export type LabelsFindUniqueOrThrowArgs = LabelsFindUniqueArgsBase
      

  /**
   * Labels: findFirstOrThrow
   */
  export type LabelsFindFirstOrThrowArgs = LabelsFindFirstArgsBase
      

  /**
   * Labels without action
   */
  export type LabelsArgs = {
    /**
     * Select specific fields to fetch from the Labels
     * 
    **/
    select?: LabelsSelect | null
  }



  /**
   * Model DatabaseKeys
   */


  export type AggregateDatabaseKeys = {
    _count: DatabaseKeysCountAggregateOutputType | null
    _avg: DatabaseKeysAvgAggregateOutputType | null
    _sum: DatabaseKeysSumAggregateOutputType | null
    _min: DatabaseKeysMinAggregateOutputType | null
    _max: DatabaseKeysMaxAggregateOutputType | null
  }

  export type DatabaseKeysAvgAggregateOutputType = {
    intKey: number | null
  }

  export type DatabaseKeysSumAggregateOutputType = {
    intKey: number | null
  }

  export type DatabaseKeysMinAggregateOutputType = {
    id: string | null
    description: string | null
    stringKey: string | null
    intKey: number | null
    boolKey: boolean | null
  }

  export type DatabaseKeysMaxAggregateOutputType = {
    id: string | null
    description: string | null
    stringKey: string | null
    intKey: number | null
    boolKey: boolean | null
  }

  export type DatabaseKeysCountAggregateOutputType = {
    id: number
    description: number
    stringKey: number
    intKey: number
    boolKey: number
    _all: number
  }


  export type DatabaseKeysAvgAggregateInputType = {
    intKey?: true
  }

  export type DatabaseKeysSumAggregateInputType = {
    intKey?: true
  }

  export type DatabaseKeysMinAggregateInputType = {
    id?: true
    description?: true
    stringKey?: true
    intKey?: true
    boolKey?: true
  }

  export type DatabaseKeysMaxAggregateInputType = {
    id?: true
    description?: true
    stringKey?: true
    intKey?: true
    boolKey?: true
  }

  export type DatabaseKeysCountAggregateInputType = {
    id?: true
    description?: true
    stringKey?: true
    intKey?: true
    boolKey?: true
    _all?: true
  }

  export type DatabaseKeysAggregateArgs = {
    /**
     * Filter which DatabaseKeys to aggregate.
     * 
    **/
    where?: DatabaseKeysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatabaseKeys to fetch.
     * 
    **/
    orderBy?: Enumerable<DatabaseKeysOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: DatabaseKeysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatabaseKeys from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatabaseKeys.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DatabaseKeys
    **/
    _count?: true | DatabaseKeysCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DatabaseKeysAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DatabaseKeysSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DatabaseKeysMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DatabaseKeysMaxAggregateInputType
  }

  export type GetDatabaseKeysAggregateType<T extends DatabaseKeysAggregateArgs> = {
        [P in keyof T & keyof AggregateDatabaseKeys]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDatabaseKeys[P]>
      : GetScalarType<T[P], AggregateDatabaseKeys[P]>
  }




  export type DatabaseKeysGroupByArgs = {
    where?: DatabaseKeysWhereInput
    orderBy?: Enumerable<DatabaseKeysOrderByWithAggregationInput>
    by: Array<DatabaseKeysScalarFieldEnum>
    having?: DatabaseKeysScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DatabaseKeysCountAggregateInputType | true
    _avg?: DatabaseKeysAvgAggregateInputType
    _sum?: DatabaseKeysSumAggregateInputType
    _min?: DatabaseKeysMinAggregateInputType
    _max?: DatabaseKeysMaxAggregateInputType
  }


  export type DatabaseKeysGroupByOutputType = {
    id: string
    description: string
    stringKey: string | null
    intKey: number | null
    boolKey: boolean | null
    _count: DatabaseKeysCountAggregateOutputType | null
    _avg: DatabaseKeysAvgAggregateOutputType | null
    _sum: DatabaseKeysSumAggregateOutputType | null
    _min: DatabaseKeysMinAggregateOutputType | null
    _max: DatabaseKeysMaxAggregateOutputType | null
  }

  type GetDatabaseKeysGroupByPayload<T extends DatabaseKeysGroupByArgs> = PrismaPromise<
    Array<
      PickArray<DatabaseKeysGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DatabaseKeysGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DatabaseKeysGroupByOutputType[P]>
            : GetScalarType<T[P], DatabaseKeysGroupByOutputType[P]>
        }
      >
    >


  export type DatabaseKeysSelect = {
    id?: boolean
    description?: boolean
    stringKey?: boolean
    intKey?: boolean
    boolKey?: boolean
  }


  export type DatabaseKeysGetPayload<S extends boolean | null | undefined | DatabaseKeysArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? DatabaseKeys :
    S extends undefined ? never :
    S extends { include: any } & (DatabaseKeysArgs | DatabaseKeysFindManyArgs)
    ? DatabaseKeys 
    : S extends { select: any } & (DatabaseKeysArgs | DatabaseKeysFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof DatabaseKeys ? DatabaseKeys[P] : never
  } 
      : DatabaseKeys


  type DatabaseKeysCountArgs = Merge<
    Omit<DatabaseKeysFindManyArgs, 'select' | 'include'> & {
      select?: DatabaseKeysCountAggregateInputType | true
    }
  >

  export interface DatabaseKeysDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one DatabaseKeys that matches the filter.
     * @param {DatabaseKeysFindUniqueArgs} args - Arguments to find a DatabaseKeys
     * @example
     * // Get one DatabaseKeys
     * const databaseKeys = await prisma.databaseKeys.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DatabaseKeysFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DatabaseKeysFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'DatabaseKeys'> extends True ? Prisma__DatabaseKeysClient<DatabaseKeysGetPayload<T>> : Prisma__DatabaseKeysClient<DatabaseKeysGetPayload<T> | null, null>

    /**
     * Find the first DatabaseKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseKeysFindFirstArgs} args - Arguments to find a DatabaseKeys
     * @example
     * // Get one DatabaseKeys
     * const databaseKeys = await prisma.databaseKeys.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DatabaseKeysFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DatabaseKeysFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'DatabaseKeys'> extends True ? Prisma__DatabaseKeysClient<DatabaseKeysGetPayload<T>> : Prisma__DatabaseKeysClient<DatabaseKeysGetPayload<T> | null, null>

    /**
     * Find zero or more DatabaseKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseKeysFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DatabaseKeys
     * const databaseKeys = await prisma.databaseKeys.findMany()
     * 
     * // Get first 10 DatabaseKeys
     * const databaseKeys = await prisma.databaseKeys.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const databaseKeysWithIdOnly = await prisma.databaseKeys.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DatabaseKeysFindManyArgs>(
      args?: SelectSubset<T, DatabaseKeysFindManyArgs>
    ): PrismaPromise<Array<DatabaseKeysGetPayload<T>>>

    /**
     * Create a DatabaseKeys.
     * @param {DatabaseKeysCreateArgs} args - Arguments to create a DatabaseKeys.
     * @example
     * // Create one DatabaseKeys
     * const DatabaseKeys = await prisma.databaseKeys.create({
     *   data: {
     *     // ... data to create a DatabaseKeys
     *   }
     * })
     * 
    **/
    create<T extends DatabaseKeysCreateArgs>(
      args: SelectSubset<T, DatabaseKeysCreateArgs>
    ): Prisma__DatabaseKeysClient<DatabaseKeysGetPayload<T>>

    /**
     * Create many DatabaseKeys.
     *     @param {DatabaseKeysCreateManyArgs} args - Arguments to create many DatabaseKeys.
     *     @example
     *     // Create many DatabaseKeys
     *     const databaseKeys = await prisma.databaseKeys.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DatabaseKeysCreateManyArgs>(
      args?: SelectSubset<T, DatabaseKeysCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a DatabaseKeys.
     * @param {DatabaseKeysDeleteArgs} args - Arguments to delete one DatabaseKeys.
     * @example
     * // Delete one DatabaseKeys
     * const DatabaseKeys = await prisma.databaseKeys.delete({
     *   where: {
     *     // ... filter to delete one DatabaseKeys
     *   }
     * })
     * 
    **/
    delete<T extends DatabaseKeysDeleteArgs>(
      args: SelectSubset<T, DatabaseKeysDeleteArgs>
    ): Prisma__DatabaseKeysClient<DatabaseKeysGetPayload<T>>

    /**
     * Update one DatabaseKeys.
     * @param {DatabaseKeysUpdateArgs} args - Arguments to update one DatabaseKeys.
     * @example
     * // Update one DatabaseKeys
     * const databaseKeys = await prisma.databaseKeys.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DatabaseKeysUpdateArgs>(
      args: SelectSubset<T, DatabaseKeysUpdateArgs>
    ): Prisma__DatabaseKeysClient<DatabaseKeysGetPayload<T>>

    /**
     * Delete zero or more DatabaseKeys.
     * @param {DatabaseKeysDeleteManyArgs} args - Arguments to filter DatabaseKeys to delete.
     * @example
     * // Delete a few DatabaseKeys
     * const { count } = await prisma.databaseKeys.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DatabaseKeysDeleteManyArgs>(
      args?: SelectSubset<T, DatabaseKeysDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more DatabaseKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseKeysUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DatabaseKeys
     * const databaseKeys = await prisma.databaseKeys.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DatabaseKeysUpdateManyArgs>(
      args: SelectSubset<T, DatabaseKeysUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one DatabaseKeys.
     * @param {DatabaseKeysUpsertArgs} args - Arguments to update or create a DatabaseKeys.
     * @example
     * // Update or create a DatabaseKeys
     * const databaseKeys = await prisma.databaseKeys.upsert({
     *   create: {
     *     // ... data to create a DatabaseKeys
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DatabaseKeys we want to update
     *   }
     * })
    **/
    upsert<T extends DatabaseKeysUpsertArgs>(
      args: SelectSubset<T, DatabaseKeysUpsertArgs>
    ): Prisma__DatabaseKeysClient<DatabaseKeysGetPayload<T>>

    /**
     * Find one DatabaseKeys that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {DatabaseKeysFindUniqueOrThrowArgs} args - Arguments to find a DatabaseKeys
     * @example
     * // Get one DatabaseKeys
     * const databaseKeys = await prisma.databaseKeys.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DatabaseKeysFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DatabaseKeysFindUniqueOrThrowArgs>
    ): Prisma__DatabaseKeysClient<DatabaseKeysGetPayload<T>>

    /**
     * Find the first DatabaseKeys that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseKeysFindFirstOrThrowArgs} args - Arguments to find a DatabaseKeys
     * @example
     * // Get one DatabaseKeys
     * const databaseKeys = await prisma.databaseKeys.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DatabaseKeysFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DatabaseKeysFindFirstOrThrowArgs>
    ): Prisma__DatabaseKeysClient<DatabaseKeysGetPayload<T>>

    /**
     * Count the number of DatabaseKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseKeysCountArgs} args - Arguments to filter DatabaseKeys to count.
     * @example
     * // Count the number of DatabaseKeys
     * const count = await prisma.databaseKeys.count({
     *   where: {
     *     // ... the filter for the DatabaseKeys we want to count
     *   }
     * })
    **/
    count<T extends DatabaseKeysCountArgs>(
      args?: Subset<T, DatabaseKeysCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DatabaseKeysCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DatabaseKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseKeysAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DatabaseKeysAggregateArgs>(args: Subset<T, DatabaseKeysAggregateArgs>): PrismaPromise<GetDatabaseKeysAggregateType<T>>

    /**
     * Group by DatabaseKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseKeysGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DatabaseKeysGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DatabaseKeysGroupByArgs['orderBy'] }
        : { orderBy?: DatabaseKeysGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DatabaseKeysGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDatabaseKeysGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for DatabaseKeys.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DatabaseKeysClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * DatabaseKeys base type for findUnique actions
   */
  export type DatabaseKeysFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the DatabaseKeys
     * 
    **/
    select?: DatabaseKeysSelect | null
    /**
     * Filter, which DatabaseKeys to fetch.
     * 
    **/
    where: DatabaseKeysWhereUniqueInput
  }

  /**
   * DatabaseKeys: findUnique
   */
  export interface DatabaseKeysFindUniqueArgs extends DatabaseKeysFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DatabaseKeys base type for findFirst actions
   */
  export type DatabaseKeysFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the DatabaseKeys
     * 
    **/
    select?: DatabaseKeysSelect | null
    /**
     * Filter, which DatabaseKeys to fetch.
     * 
    **/
    where?: DatabaseKeysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatabaseKeys to fetch.
     * 
    **/
    orderBy?: Enumerable<DatabaseKeysOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DatabaseKeys.
     * 
    **/
    cursor?: DatabaseKeysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatabaseKeys from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatabaseKeys.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DatabaseKeys.
     * 
    **/
    distinct?: Enumerable<DatabaseKeysScalarFieldEnum>
  }

  /**
   * DatabaseKeys: findFirst
   */
  export interface DatabaseKeysFindFirstArgs extends DatabaseKeysFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DatabaseKeys findMany
   */
  export type DatabaseKeysFindManyArgs = {
    /**
     * Select specific fields to fetch from the DatabaseKeys
     * 
    **/
    select?: DatabaseKeysSelect | null
    /**
     * Filter, which DatabaseKeys to fetch.
     * 
    **/
    where?: DatabaseKeysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatabaseKeys to fetch.
     * 
    **/
    orderBy?: Enumerable<DatabaseKeysOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DatabaseKeys.
     * 
    **/
    cursor?: DatabaseKeysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatabaseKeys from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatabaseKeys.
     * 
    **/
    skip?: number
    distinct?: Enumerable<DatabaseKeysScalarFieldEnum>
  }


  /**
   * DatabaseKeys create
   */
  export type DatabaseKeysCreateArgs = {
    /**
     * Select specific fields to fetch from the DatabaseKeys
     * 
    **/
    select?: DatabaseKeysSelect | null
    /**
     * The data needed to create a DatabaseKeys.
     * 
    **/
    data: XOR<DatabaseKeysCreateInput, DatabaseKeysUncheckedCreateInput>
  }


  /**
   * DatabaseKeys createMany
   */
  export type DatabaseKeysCreateManyArgs = {
    /**
     * The data used to create many DatabaseKeys.
     * 
    **/
    data: Enumerable<DatabaseKeysCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * DatabaseKeys update
   */
  export type DatabaseKeysUpdateArgs = {
    /**
     * Select specific fields to fetch from the DatabaseKeys
     * 
    **/
    select?: DatabaseKeysSelect | null
    /**
     * The data needed to update a DatabaseKeys.
     * 
    **/
    data: XOR<DatabaseKeysUpdateInput, DatabaseKeysUncheckedUpdateInput>
    /**
     * Choose, which DatabaseKeys to update.
     * 
    **/
    where: DatabaseKeysWhereUniqueInput
  }


  /**
   * DatabaseKeys updateMany
   */
  export type DatabaseKeysUpdateManyArgs = {
    /**
     * The data used to update DatabaseKeys.
     * 
    **/
    data: XOR<DatabaseKeysUpdateManyMutationInput, DatabaseKeysUncheckedUpdateManyInput>
    /**
     * Filter which DatabaseKeys to update
     * 
    **/
    where?: DatabaseKeysWhereInput
  }


  /**
   * DatabaseKeys upsert
   */
  export type DatabaseKeysUpsertArgs = {
    /**
     * Select specific fields to fetch from the DatabaseKeys
     * 
    **/
    select?: DatabaseKeysSelect | null
    /**
     * The filter to search for the DatabaseKeys to update in case it exists.
     * 
    **/
    where: DatabaseKeysWhereUniqueInput
    /**
     * In case the DatabaseKeys found by the `where` argument doesn't exist, create a new DatabaseKeys with this data.
     * 
    **/
    create: XOR<DatabaseKeysCreateInput, DatabaseKeysUncheckedCreateInput>
    /**
     * In case the DatabaseKeys was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<DatabaseKeysUpdateInput, DatabaseKeysUncheckedUpdateInput>
  }


  /**
   * DatabaseKeys delete
   */
  export type DatabaseKeysDeleteArgs = {
    /**
     * Select specific fields to fetch from the DatabaseKeys
     * 
    **/
    select?: DatabaseKeysSelect | null
    /**
     * Filter which DatabaseKeys to delete.
     * 
    **/
    where: DatabaseKeysWhereUniqueInput
  }


  /**
   * DatabaseKeys deleteMany
   */
  export type DatabaseKeysDeleteManyArgs = {
    /**
     * Filter which DatabaseKeys to delete
     * 
    **/
    where?: DatabaseKeysWhereInput
  }


  /**
   * DatabaseKeys: findUniqueOrThrow
   */
  export type DatabaseKeysFindUniqueOrThrowArgs = DatabaseKeysFindUniqueArgsBase
      

  /**
   * DatabaseKeys: findFirstOrThrow
   */
  export type DatabaseKeysFindFirstOrThrowArgs = DatabaseKeysFindFirstArgsBase
      

  /**
   * DatabaseKeys without action
   */
  export type DatabaseKeysArgs = {
    /**
     * Select specific fields to fetch from the DatabaseKeys
     * 
    **/
    select?: DatabaseKeysSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const DatabaseKeysScalarFieldEnum: {
    id: 'id',
    description: 'description',
    stringKey: 'stringKey',
    intKey: 'intKey',
    boolKey: 'boolKey'
  };

  export type DatabaseKeysScalarFieldEnum = (typeof DatabaseKeysScalarFieldEnum)[keyof typeof DatabaseKeysScalarFieldEnum]


  export const LabelsScalarFieldEnum: {
    sensor_serial_no: 'sensor_serial_no',
    label: 'label',
    time_created: 'time_created'
  };

  export type LabelsScalarFieldEnum = (typeof LabelsScalarFieldEnum)[keyof typeof LabelsScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SensorRecordsScalarFieldEnum: {
    id: 'id',
    label: 'label',
    session_id: 'session_id',
    sqv: 'sqv',
    direction: 'direction',
    date: 'date',
    date_string: 'date_string'
  };

  export type SensorRecordsScalarFieldEnum = (typeof SensorRecordsScalarFieldEnum)[keyof typeof SensorRecordsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type SensorRecordsWhereInput = {
    AND?: Enumerable<SensorRecordsWhereInput>
    OR?: Enumerable<SensorRecordsWhereInput>
    NOT?: Enumerable<SensorRecordsWhereInput>
    id?: IntFilter | number
    label?: StringFilter | string
    session_id?: StringFilter | string
    sqv?: IntFilter | number
    direction?: StringFilter | string
    date?: DateTimeFilter | Date | string
    date_string?: StringFilter | string
  }

  export type SensorRecordsOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    session_id?: SortOrder
    sqv?: SortOrder
    direction?: SortOrder
    date?: SortOrder
    date_string?: SortOrder
  }

  export type SensorRecordsWhereUniqueInput = {
    session_id_date?: SensorRecordsSession_idDateCompoundUniqueInput
  }

  export type SensorRecordsOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    session_id?: SortOrder
    sqv?: SortOrder
    direction?: SortOrder
    date?: SortOrder
    date_string?: SortOrder
    _count?: SensorRecordsCountOrderByAggregateInput
    _avg?: SensorRecordsAvgOrderByAggregateInput
    _max?: SensorRecordsMaxOrderByAggregateInput
    _min?: SensorRecordsMinOrderByAggregateInput
    _sum?: SensorRecordsSumOrderByAggregateInput
  }

  export type SensorRecordsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SensorRecordsScalarWhereWithAggregatesInput>
    OR?: Enumerable<SensorRecordsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SensorRecordsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    label?: StringWithAggregatesFilter | string
    session_id?: StringWithAggregatesFilter | string
    sqv?: IntWithAggregatesFilter | number
    direction?: StringWithAggregatesFilter | string
    date?: DateTimeWithAggregatesFilter | Date | string
    date_string?: StringWithAggregatesFilter | string
  }

  export type LabelsWhereInput = {
    AND?: Enumerable<LabelsWhereInput>
    OR?: Enumerable<LabelsWhereInput>
    NOT?: Enumerable<LabelsWhereInput>
    sensor_serial_no?: StringFilter | string
    label?: StringNullableFilter | string | null
    time_created?: DateTimeFilter | Date | string
  }

  export type LabelsOrderByWithRelationInput = {
    sensor_serial_no?: SortOrder
    label?: SortOrder
    time_created?: SortOrder
  }

  export type LabelsWhereUniqueInput = {
    sensor_serial_no?: string
  }

  export type LabelsOrderByWithAggregationInput = {
    sensor_serial_no?: SortOrder
    label?: SortOrder
    time_created?: SortOrder
    _count?: LabelsCountOrderByAggregateInput
    _max?: LabelsMaxOrderByAggregateInput
    _min?: LabelsMinOrderByAggregateInput
  }

  export type LabelsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LabelsScalarWhereWithAggregatesInput>
    OR?: Enumerable<LabelsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LabelsScalarWhereWithAggregatesInput>
    sensor_serial_no?: StringWithAggregatesFilter | string
    label?: StringNullableWithAggregatesFilter | string | null
    time_created?: DateTimeWithAggregatesFilter | Date | string
  }

  export type DatabaseKeysWhereInput = {
    AND?: Enumerable<DatabaseKeysWhereInput>
    OR?: Enumerable<DatabaseKeysWhereInput>
    NOT?: Enumerable<DatabaseKeysWhereInput>
    id?: StringFilter | string
    description?: StringFilter | string
    stringKey?: StringNullableFilter | string | null
    intKey?: IntNullableFilter | number | null
    boolKey?: BoolNullableFilter | boolean | null
  }

  export type DatabaseKeysOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    stringKey?: SortOrder
    intKey?: SortOrder
    boolKey?: SortOrder
  }

  export type DatabaseKeysWhereUniqueInput = {
    id?: string
  }

  export type DatabaseKeysOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    stringKey?: SortOrder
    intKey?: SortOrder
    boolKey?: SortOrder
    _count?: DatabaseKeysCountOrderByAggregateInput
    _avg?: DatabaseKeysAvgOrderByAggregateInput
    _max?: DatabaseKeysMaxOrderByAggregateInput
    _min?: DatabaseKeysMinOrderByAggregateInput
    _sum?: DatabaseKeysSumOrderByAggregateInput
  }

  export type DatabaseKeysScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DatabaseKeysScalarWhereWithAggregatesInput>
    OR?: Enumerable<DatabaseKeysScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DatabaseKeysScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    stringKey?: StringNullableWithAggregatesFilter | string | null
    intKey?: IntNullableWithAggregatesFilter | number | null
    boolKey?: BoolNullableWithAggregatesFilter | boolean | null
  }

  export type SensorRecordsCreateInput = {
    id?: number
    label: string
    session_id: string
    sqv: number
    direction: string
    date: Date | string
    date_string: string
  }

  export type SensorRecordsUncheckedCreateInput = {
    id?: number
    label: string
    session_id: string
    sqv: number
    direction: string
    date: Date | string
    date_string: string
  }

  export type SensorRecordsUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    session_id?: StringFieldUpdateOperationsInput | string
    sqv?: IntFieldUpdateOperationsInput | number
    direction?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    date_string?: StringFieldUpdateOperationsInput | string
  }

  export type SensorRecordsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    session_id?: StringFieldUpdateOperationsInput | string
    sqv?: IntFieldUpdateOperationsInput | number
    direction?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    date_string?: StringFieldUpdateOperationsInput | string
  }

  export type SensorRecordsCreateManyInput = {
    id?: number
    label: string
    session_id: string
    sqv: number
    direction: string
    date: Date | string
    date_string: string
  }

  export type SensorRecordsUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    session_id?: StringFieldUpdateOperationsInput | string
    sqv?: IntFieldUpdateOperationsInput | number
    direction?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    date_string?: StringFieldUpdateOperationsInput | string
  }

  export type SensorRecordsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    session_id?: StringFieldUpdateOperationsInput | string
    sqv?: IntFieldUpdateOperationsInput | number
    direction?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    date_string?: StringFieldUpdateOperationsInput | string
  }

  export type LabelsCreateInput = {
    sensor_serial_no: string
    label?: string | null
    time_created?: Date | string
  }

  export type LabelsUncheckedCreateInput = {
    sensor_serial_no: string
    label?: string | null
    time_created?: Date | string
  }

  export type LabelsUpdateInput = {
    sensor_serial_no?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabelsUncheckedUpdateInput = {
    sensor_serial_no?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabelsCreateManyInput = {
    sensor_serial_no: string
    label?: string | null
    time_created?: Date | string
  }

  export type LabelsUpdateManyMutationInput = {
    sensor_serial_no?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabelsUncheckedUpdateManyInput = {
    sensor_serial_no?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DatabaseKeysCreateInput = {
    id: string
    description: string
    stringKey?: string | null
    intKey?: number | null
    boolKey?: boolean | null
  }

  export type DatabaseKeysUncheckedCreateInput = {
    id: string
    description: string
    stringKey?: string | null
    intKey?: number | null
    boolKey?: boolean | null
  }

  export type DatabaseKeysUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    stringKey?: NullableStringFieldUpdateOperationsInput | string | null
    intKey?: NullableIntFieldUpdateOperationsInput | number | null
    boolKey?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type DatabaseKeysUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    stringKey?: NullableStringFieldUpdateOperationsInput | string | null
    intKey?: NullableIntFieldUpdateOperationsInput | number | null
    boolKey?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type DatabaseKeysCreateManyInput = {
    id: string
    description: string
    stringKey?: string | null
    intKey?: number | null
    boolKey?: boolean | null
  }

  export type DatabaseKeysUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    stringKey?: NullableStringFieldUpdateOperationsInput | string | null
    intKey?: NullableIntFieldUpdateOperationsInput | number | null
    boolKey?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type DatabaseKeysUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    stringKey?: NullableStringFieldUpdateOperationsInput | string | null
    intKey?: NullableIntFieldUpdateOperationsInput | number | null
    boolKey?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type SensorRecordsSession_idDateCompoundUniqueInput = {
    session_id: string
    date: Date | string
  }

  export type SensorRecordsCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    session_id?: SortOrder
    sqv?: SortOrder
    direction?: SortOrder
    date?: SortOrder
    date_string?: SortOrder
  }

  export type SensorRecordsAvgOrderByAggregateInput = {
    id?: SortOrder
    sqv?: SortOrder
  }

  export type SensorRecordsMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    session_id?: SortOrder
    sqv?: SortOrder
    direction?: SortOrder
    date?: SortOrder
    date_string?: SortOrder
  }

  export type SensorRecordsMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    session_id?: SortOrder
    sqv?: SortOrder
    direction?: SortOrder
    date?: SortOrder
    date_string?: SortOrder
  }

  export type SensorRecordsSumOrderByAggregateInput = {
    id?: SortOrder
    sqv?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type LabelsCountOrderByAggregateInput = {
    sensor_serial_no?: SortOrder
    label?: SortOrder
    time_created?: SortOrder
  }

  export type LabelsMaxOrderByAggregateInput = {
    sensor_serial_no?: SortOrder
    label?: SortOrder
    time_created?: SortOrder
  }

  export type LabelsMinOrderByAggregateInput = {
    sensor_serial_no?: SortOrder
    label?: SortOrder
    time_created?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type BoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type DatabaseKeysCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    stringKey?: SortOrder
    intKey?: SortOrder
    boolKey?: SortOrder
  }

  export type DatabaseKeysAvgOrderByAggregateInput = {
    intKey?: SortOrder
  }

  export type DatabaseKeysMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    stringKey?: SortOrder
    intKey?: SortOrder
    boolKey?: SortOrder
  }

  export type DatabaseKeysMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    stringKey?: SortOrder
    intKey?: SortOrder
    boolKey?: SortOrder
  }

  export type DatabaseKeysSumOrderByAggregateInput = {
    intKey?: SortOrder
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type BoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedBoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}