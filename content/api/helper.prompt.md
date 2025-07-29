You will receive `.java` source files and must convert them into structured JavaScript representations using the following schema:

---

### Primitives

Use constants:

```ts
String, Int, Boolean, Void, Null, Double
```

---

### Enums

```ts
Enum("EnumName")
```

---

### Objects (Classes)

```ts
Object("ClassName", {
  instanceMember: ...,
}, implementsFn?, {
  staticMember: ...,
}, {
  $docHref?: string,
  $source?: string,
  $package?: string,
}, "optionalInfo")
```

---

### Methods

```ts
Method("info", fsig(ReturnType, param("name", Type, "optional doc"), ...))
```

For multiple overloads, list multiple `fsig(...)`.

---

### Anonymous Methods

```ts
AnonMethod(fsig(...))
```

---

### Parameters

```ts
param("label", Type, "info")
```

---

### Nullable and Union

```ts
nullable(Type)
union(TypeA, TypeB)
```

---

### External Types

```ts
External("SimpleName", "full.qualified.Name")
ExternalGeneric("SimpleName", "full.Name")(arg1, arg2)
```

---

### Events

```ts
EventGroup("Name", "Info", { methodName: EventHandler(...) })
EventHandler("info", ["server"], ObjectType, [optionalTargetParam], boolean)
```

---

### Mapping Summary

| Java             | Representation                                |
| ---------------- | --------------------------------------------- |
| `public class X` | `Object("X", { ... })`                        |
| `extends Base`   | `() => BaseType`                              |
| `String name;`   | `name: String`                                |
| `void f(int a)`  | `Method("info", fsig(Void, param("a", Int)))` |
| `static int x;`  | In static section                             |
| unknown types    | `External(...)`                               |

---

Now ready to convert `.java` files to JS object schema.
