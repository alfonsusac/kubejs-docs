declare module "packages/java/text/$FieldPosition" {
import {$Format$Field, $Format$Field$Type} from "packages/java/text/$Format$Field"

export class $FieldPosition {

constructor(arg0: integer)
constructor(arg0: $Format$Field$Type, arg1: integer)
constructor(arg0: $Format$Field$Type)

public "getBeginIndex"(): integer
public "getEndIndex"(): integer
public "setBeginIndex"(arg0: integer): void
public "setEndIndex"(arg0: integer): void
public "getFieldAttribute"(): $Format$Field
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getField"(): integer
get "beginIndex"(): integer
get "endIndex"(): integer
set "beginIndex"(value: integer)
set "endIndex"(value: integer)
get "fieldAttribute"(): $Format$Field
get "field"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FieldPosition$Type = ($FieldPosition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FieldPosition_ = $FieldPosition$Type;
}}
declare module "packages/java/text/$DecimalFormat" {
import {$FieldPosition, $FieldPosition$Type} from "packages/java/text/$FieldPosition"
import {$DecimalFormatSymbols, $DecimalFormatSymbols$Type} from "packages/java/text/$DecimalFormatSymbols"
import {$StringBuffer, $StringBuffer$Type} from "packages/java/lang/$StringBuffer"
import {$NumberFormat, $NumberFormat$Type} from "packages/java/text/$NumberFormat"
import {$RoundingMode, $RoundingMode$Type} from "packages/java/math/$RoundingMode"
import {$AttributedCharacterIterator, $AttributedCharacterIterator$Type} from "packages/java/text/$AttributedCharacterIterator"
import {$Currency, $Currency$Type} from "packages/java/util/$Currency"
import {$ParsePosition, $ParsePosition$Type} from "packages/java/text/$ParsePosition"

export class $DecimalFormat extends $NumberFormat {
static readonly "INTEGER_FIELD": integer
static readonly "FRACTION_FIELD": integer

constructor(arg0: string)
constructor(arg0: string, arg1: $DecimalFormatSymbols$Type)
constructor()

public "getRoundingMode"(): $RoundingMode
public "formatToCharacterIterator"(arg0: any): $AttributedCharacterIterator
public "setGroupingUsed"(arg0: boolean): void
public "getDecimalFormatSymbols"(): $DecimalFormatSymbols
public "setMinimumIntegerDigits"(arg0: integer): void
public "setMaximumIntegerDigits"(arg0: integer): void
public "parse"(arg0: string, arg1: $ParsePosition$Type): number
public "getMaximumIntegerDigits"(): integer
public "getMinimumIntegerDigits"(): integer
public "getMaximumFractionDigits"(): integer
public "setMaximumFractionDigits"(arg0: integer): void
public "getMinimumFractionDigits"(): integer
public "setMinimumFractionDigits"(arg0: integer): void
public "getCurrency"(): $Currency
public "setCurrency"(arg0: $Currency$Type): void
public "setRoundingMode"(arg0: $RoundingMode$Type): void
public "setDecimalSeparatorAlwaysShown"(arg0: boolean): void
public "getGroupingSize"(): integer
public "toLocalizedPattern"(): string
public "applyPattern"(arg0: string): void
public "applyLocalizedPattern"(arg0: string): void
public "isParseBigDecimal"(): boolean
public "setDecimalFormatSymbols"(arg0: $DecimalFormatSymbols$Type): void
public "getPositivePrefix"(): string
public "setPositivePrefix"(arg0: string): void
public "getNegativePrefix"(): string
public "setNegativePrefix"(arg0: string): void
public "getPositiveSuffix"(): string
public "setPositiveSuffix"(arg0: string): void
public "getNegativeSuffix"(): string
public "setNegativeSuffix"(arg0: string): void
public "getMultiplier"(): integer
public "setMultiplier"(arg0: integer): void
public "setGroupingSize"(arg0: integer): void
public "isDecimalSeparatorAlwaysShown"(): boolean
public "setParseBigDecimal"(arg0: boolean): void
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "clone"(): any
public "format"(arg0: long, arg1: $StringBuffer$Type, arg2: $FieldPosition$Type): $StringBuffer
public "format"(arg0: double, arg1: $StringBuffer$Type, arg2: $FieldPosition$Type): $StringBuffer
public "format"(arg0: any, arg1: $StringBuffer$Type, arg2: $FieldPosition$Type): $StringBuffer
public "toPattern"(): string
get "roundingMode"(): $RoundingMode
set "groupingUsed"(value: boolean)
get "decimalFormatSymbols"(): $DecimalFormatSymbols
set "minimumIntegerDigits"(value: integer)
set "maximumIntegerDigits"(value: integer)
get "maximumIntegerDigits"(): integer
get "minimumIntegerDigits"(): integer
get "maximumFractionDigits"(): integer
set "maximumFractionDigits"(value: integer)
get "minimumFractionDigits"(): integer
set "minimumFractionDigits"(value: integer)
get "currency"(): $Currency
set "currency"(value: $Currency$Type)
set "roundingMode"(value: $RoundingMode$Type)
set "decimalSeparatorAlwaysShown"(value: boolean)
get "groupingSize"(): integer
get "parseBigDecimal"(): boolean
set "decimalFormatSymbols"(value: $DecimalFormatSymbols$Type)
get "positivePrefix"(): string
set "positivePrefix"(value: string)
get "negativePrefix"(): string
set "negativePrefix"(value: string)
get "positiveSuffix"(): string
set "positiveSuffix"(value: string)
get "negativeSuffix"(): string
set "negativeSuffix"(value: string)
get "multiplier"(): integer
set "multiplier"(value: integer)
set "groupingSize"(value: integer)
get "decimalSeparatorAlwaysShown"(): boolean
set "parseBigDecimal"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DecimalFormat$Type = ($DecimalFormat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DecimalFormat_ = $DecimalFormat$Type;
}}
declare module "packages/java/text/$DateFormatSymbols" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$Locale, $Locale$Type} from "packages/java/util/$Locale"

export class $DateFormatSymbols implements $Serializable, $Cloneable {

constructor(arg0: $Locale$Type)
constructor()

public "getEras"(): (string)[]
public "setEras"(arg0: (string)[]): void
public "getMonths"(): (string)[]
public "getShortMonths"(): (string)[]
public "getWeekdays"(): (string)[]
public "getShortWeekdays"(): (string)[]
public "getAmPmStrings"(): (string)[]
public "getLocalPatternChars"(): string
public "getZoneStrings"(): ((string)[])[]
public "setMonths"(arg0: (string)[]): void
public "setShortMonths"(arg0: (string)[]): void
public "setWeekdays"(arg0: (string)[]): void
public "setShortWeekdays"(arg0: (string)[]): void
public "setAmPmStrings"(arg0: (string)[]): void
public "setZoneStrings"(arg0: ((string)[])[]): void
public "setLocalPatternChars"(arg0: string): void
public static "getAvailableLocales"(): ($Locale)[]
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "clone"(): any
public static "getInstance"(): $DateFormatSymbols
public static "getInstance"(arg0: $Locale$Type): $DateFormatSymbols
get "eras"(): (string)[]
set "eras"(value: (string)[])
get "months"(): (string)[]
get "shortMonths"(): (string)[]
get "weekdays"(): (string)[]
get "shortWeekdays"(): (string)[]
get "amPmStrings"(): (string)[]
get "localPatternChars"(): string
get "zoneStrings"(): ((string)[])[]
set "months"(value: (string)[])
set "shortMonths"(value: (string)[])
set "weekdays"(value: (string)[])
set "shortWeekdays"(value: (string)[])
set "amPmStrings"(value: (string)[])
set "zoneStrings"(value: ((string)[])[])
set "localPatternChars"(value: string)
get "availableLocales"(): ($Locale)[]
get "instance"(): $DateFormatSymbols
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DateFormatSymbols$Type = ($DateFormatSymbols);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DateFormatSymbols_ = $DateFormatSymbols$Type;
}}
declare module "packages/java/text/$DateFormat" {
import {$Calendar, $Calendar$Type} from "packages/java/util/$Calendar"
import {$FieldPosition, $FieldPosition$Type} from "packages/java/text/$FieldPosition"
import {$Date, $Date$Type} from "packages/java/util/$Date"
import {$NumberFormat, $NumberFormat$Type} from "packages/java/text/$NumberFormat"
import {$StringBuffer, $StringBuffer$Type} from "packages/java/lang/$StringBuffer"
import {$Format, $Format$Type} from "packages/java/text/$Format"
import {$ParsePosition, $ParsePosition$Type} from "packages/java/text/$ParsePosition"
import {$TimeZone, $TimeZone$Type} from "packages/java/util/$TimeZone"
import {$Locale, $Locale$Type} from "packages/java/util/$Locale"

export class $DateFormat extends $Format {
static readonly "ERA_FIELD": integer
static readonly "YEAR_FIELD": integer
static readonly "MONTH_FIELD": integer
static readonly "DATE_FIELD": integer
static readonly "HOUR_OF_DAY1_FIELD": integer
static readonly "HOUR_OF_DAY0_FIELD": integer
static readonly "MINUTE_FIELD": integer
static readonly "SECOND_FIELD": integer
static readonly "MILLISECOND_FIELD": integer
static readonly "DAY_OF_WEEK_FIELD": integer
static readonly "DAY_OF_YEAR_FIELD": integer
static readonly "DAY_OF_WEEK_IN_MONTH_FIELD": integer
static readonly "WEEK_OF_YEAR_FIELD": integer
static readonly "WEEK_OF_MONTH_FIELD": integer
static readonly "AM_PM_FIELD": integer
static readonly "HOUR1_FIELD": integer
static readonly "HOUR0_FIELD": integer
static readonly "TIMEZONE_FIELD": integer
static readonly "FULL": integer
static readonly "LONG": integer
static readonly "MEDIUM": integer
static readonly "SHORT": integer
static readonly "DEFAULT": integer


public static "getDateTimeInstance"(arg0: integer, arg1: integer, arg2: $Locale$Type): $DateFormat
public static "getDateTimeInstance"(): $DateFormat
public static "getDateTimeInstance"(arg0: integer, arg1: integer): $DateFormat
public static "getTimeInstance"(): $DateFormat
public static "getTimeInstance"(arg0: integer): $DateFormat
public static "getTimeInstance"(arg0: integer, arg1: $Locale$Type): $DateFormat
public "parseObject"(arg0: string, arg1: $ParsePosition$Type): any
public "setCalendar"(arg0: $Calendar$Type): void
public "getCalendar"(): $Calendar
public "setNumberFormat"(arg0: $NumberFormat$Type): void
public "getNumberFormat"(): $NumberFormat
public "parse"(arg0: string): $Date
public "parse"(arg0: string, arg1: $ParsePosition$Type): $Date
public static "getAvailableLocales"(): ($Locale)[]
public "getTimeZone"(): $TimeZone
public "setTimeZone"(arg0: $TimeZone$Type): void
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "clone"(): any
public "format"(arg0: $Date$Type): string
public "format"(arg0: $Date$Type, arg1: $StringBuffer$Type, arg2: $FieldPosition$Type): $StringBuffer
public "format"(arg0: any, arg1: $StringBuffer$Type, arg2: $FieldPosition$Type): $StringBuffer
public static "getInstance"(): $DateFormat
public static "getDateInstance"(arg0: integer): $DateFormat
public static "getDateInstance"(): $DateFormat
public static "getDateInstance"(arg0: integer, arg1: $Locale$Type): $DateFormat
public "setLenient"(arg0: boolean): void
public "isLenient"(): boolean
get "dateTimeInstance"(): $DateFormat
get "timeInstance"(): $DateFormat
set "calendar"(value: $Calendar$Type)
get "calendar"(): $Calendar
set "numberFormat"(value: $NumberFormat$Type)
get "numberFormat"(): $NumberFormat
get "availableLocales"(): ($Locale)[]
get "timeZone"(): $TimeZone
set "timeZone"(value: $TimeZone$Type)
get "instance"(): $DateFormat
get "dateInstance"(): $DateFormat
set "lenient"(value: boolean)
get "lenient"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DateFormat$Type = ($DateFormat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DateFormat_ = $DateFormat$Type;
}}
declare module "packages/java/text/$DecimalFormatSymbols" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$Currency, $Currency$Type} from "packages/java/util/$Currency"
import {$Locale, $Locale$Type} from "packages/java/util/$Locale"

export class $DecimalFormatSymbols implements $Cloneable, $Serializable {

constructor()
constructor(arg0: $Locale$Type)

public "getZeroDigit"(): character
public "getMinusSign"(): character
public "getCurrency"(): $Currency
public "setCurrency"(arg0: $Currency$Type): void
public "getInternationalCurrencySymbol"(): string
public "getCurrencySymbol"(): string
public "setZeroDigit"(arg0: character): void
public "setGroupingSeparator"(arg0: character): void
public "setDecimalSeparator"(arg0: character): void
public "getPerMill"(): character
public "setPerMill"(arg0: character): void
public "getPercent"(): character
public "setPercent"(arg0: character): void
public "getDigit"(): character
public "setDigit"(arg0: character): void
public "getPatternSeparator"(): character
public "setPatternSeparator"(arg0: character): void
public "getInfinity"(): string
public "setInfinity"(arg0: string): void
public "getNaN"(): string
public "setNaN"(arg0: string): void
public "setMinusSign"(arg0: character): void
public "setCurrencySymbol"(arg0: string): void
public "setInternationalCurrencySymbol"(arg0: string): void
public "getMonetaryDecimalSeparator"(): character
public "setMonetaryDecimalSeparator"(arg0: character): void
public "getExponentSeparator"(): string
public "setExponentSeparator"(arg0: string): void
public "getMonetaryGroupingSeparator"(): character
public "setMonetaryGroupingSeparator"(arg0: character): void
public "getDecimalSeparator"(): character
public "getGroupingSeparator"(): character
public static "getAvailableLocales"(): ($Locale)[]
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "clone"(): any
public static "getInstance"(): $DecimalFormatSymbols
public static "getInstance"(arg0: $Locale$Type): $DecimalFormatSymbols
get "zeroDigit"(): character
get "minusSign"(): character
get "currency"(): $Currency
set "currency"(value: $Currency$Type)
get "internationalCurrencySymbol"(): string
get "currencySymbol"(): string
set "zeroDigit"(value: character)
set "groupingSeparator"(value: character)
set "decimalSeparator"(value: character)
get "perMill"(): character
set "perMill"(value: character)
get "percent"(): character
set "percent"(value: character)
get "digit"(): character
set "digit"(value: character)
get "patternSeparator"(): character
set "patternSeparator"(value: character)
get "infinity"(): string
set "infinity"(value: string)
get "naN"(): string
set "naN"(value: string)
set "minusSign"(value: character)
set "currencySymbol"(value: string)
set "internationalCurrencySymbol"(value: string)
get "monetaryDecimalSeparator"(): character
set "monetaryDecimalSeparator"(value: character)
get "exponentSeparator"(): string
set "exponentSeparator"(value: string)
get "monetaryGroupingSeparator"(): character
set "monetaryGroupingSeparator"(value: character)
get "decimalSeparator"(): character
get "groupingSeparator"(): character
get "availableLocales"(): ($Locale)[]
get "instance"(): $DecimalFormatSymbols
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DecimalFormatSymbols$Type = ($DecimalFormatSymbols);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DecimalFormatSymbols_ = $DecimalFormatSymbols$Type;
}}
declare module "packages/java/text/$ParsePosition" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ParsePosition {

constructor(arg0: integer)

public "setIndex"(arg0: integer): void
public "getErrorIndex"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getIndex"(): integer
public "setErrorIndex"(arg0: integer): void
set "index"(value: integer)
get "errorIndex"(): integer
get "index"(): integer
set "errorIndex"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParsePosition$Type = ($ParsePosition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParsePosition_ = $ParsePosition$Type;
}}
declare module "packages/java/text/$AttributedCharacterIterator$Attribute" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"

export class $AttributedCharacterIterator$Attribute implements $Serializable {
static readonly "LANGUAGE": $AttributedCharacterIterator$Attribute
static readonly "READING": $AttributedCharacterIterator$Attribute
static readonly "INPUT_METHOD_SEGMENT": $AttributedCharacterIterator$Attribute


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttributedCharacterIterator$Attribute$Type = ($AttributedCharacterIterator$Attribute);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttributedCharacterIterator$Attribute_ = $AttributedCharacterIterator$Attribute$Type;
}}
declare module "packages/java/text/$CharacterIterator" {
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"

export interface $CharacterIterator extends $Cloneable {

 "setIndex"(arg0: integer): character
 "getBeginIndex"(): integer
 "getEndIndex"(): integer
 "clone"(): any
 "next"(): character
 "last"(): character
 "first"(): character
 "current"(): character
 "previous"(): character
 "getIndex"(): integer
}

export namespace $CharacterIterator {
const DONE: character
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CharacterIterator$Type = ($CharacterIterator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CharacterIterator_ = $CharacterIterator$Type;
}}
declare module "packages/java/text/$SimpleDateFormat" {
import {$FieldPosition, $FieldPosition$Type} from "packages/java/text/$FieldPosition"
import {$Date, $Date$Type} from "packages/java/util/$Date"
import {$DateFormat, $DateFormat$Type} from "packages/java/text/$DateFormat"
import {$DateFormatSymbols, $DateFormatSymbols$Type} from "packages/java/text/$DateFormatSymbols"
import {$StringBuffer, $StringBuffer$Type} from "packages/java/lang/$StringBuffer"
import {$AttributedCharacterIterator, $AttributedCharacterIterator$Type} from "packages/java/text/$AttributedCharacterIterator"
import {$ParsePosition, $ParsePosition$Type} from "packages/java/text/$ParsePosition"
import {$Locale, $Locale$Type} from "packages/java/util/$Locale"

export class $SimpleDateFormat extends $DateFormat {
static readonly "ERA_FIELD": integer
static readonly "YEAR_FIELD": integer
static readonly "MONTH_FIELD": integer
static readonly "DATE_FIELD": integer
static readonly "HOUR_OF_DAY1_FIELD": integer
static readonly "HOUR_OF_DAY0_FIELD": integer
static readonly "MINUTE_FIELD": integer
static readonly "SECOND_FIELD": integer
static readonly "MILLISECOND_FIELD": integer
static readonly "DAY_OF_WEEK_FIELD": integer
static readonly "DAY_OF_YEAR_FIELD": integer
static readonly "DAY_OF_WEEK_IN_MONTH_FIELD": integer
static readonly "WEEK_OF_YEAR_FIELD": integer
static readonly "WEEK_OF_MONTH_FIELD": integer
static readonly "AM_PM_FIELD": integer
static readonly "HOUR1_FIELD": integer
static readonly "HOUR0_FIELD": integer
static readonly "TIMEZONE_FIELD": integer
static readonly "FULL": integer
static readonly "LONG": integer
static readonly "MEDIUM": integer
static readonly "SHORT": integer
static readonly "DEFAULT": integer

constructor(arg0: string, arg1: $Locale$Type)
constructor()
constructor(arg0: string)
constructor(arg0: string, arg1: $DateFormatSymbols$Type)

public "formatToCharacterIterator"(arg0: any): $AttributedCharacterIterator
public "set2DigitYearStart"(arg0: $Date$Type): void
public "get2DigitYearStart"(): $Date
public "parse"(arg0: string, arg1: $ParsePosition$Type): $Date
public "toLocalizedPattern"(): string
public "applyPattern"(arg0: string): void
public "applyLocalizedPattern"(arg0: string): void
public "getDateFormatSymbols"(): $DateFormatSymbols
public "setDateFormatSymbols"(arg0: $DateFormatSymbols$Type): void
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "clone"(): any
public "format"(arg0: $Date$Type, arg1: $StringBuffer$Type, arg2: $FieldPosition$Type): $StringBuffer
public "toPattern"(): string
set "2DigitYearStart"(value: $Date$Type)
get "2DigitYearStart"(): $Date
get "dateFormatSymbols"(): $DateFormatSymbols
set "dateFormatSymbols"(value: $DateFormatSymbols$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleDateFormat$Type = ($SimpleDateFormat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleDateFormat_ = $SimpleDateFormat$Type;
}}
declare module "packages/java/text/$Format$Field" {
import {$AttributedCharacterIterator$Attribute, $AttributedCharacterIterator$Attribute$Type} from "packages/java/text/$AttributedCharacterIterator$Attribute"

export class $Format$Field extends $AttributedCharacterIterator$Attribute {
static readonly "LANGUAGE": $AttributedCharacterIterator$Attribute
static readonly "READING": $AttributedCharacterIterator$Attribute
static readonly "INPUT_METHOD_SEGMENT": $AttributedCharacterIterator$Attribute


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Format$Field$Type = ($Format$Field);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Format$Field_ = $Format$Field$Type;
}}
declare module "packages/java/text/$NumberFormat$Style" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $NumberFormat$Style extends $Enum<($NumberFormat$Style)> {
static readonly "SHORT": $NumberFormat$Style
static readonly "LONG": $NumberFormat$Style


public static "values"(): ($NumberFormat$Style)[]
public static "valueOf"(arg0: string): $NumberFormat$Style
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NumberFormat$Style$Type = (("short") | ("long")) | ($NumberFormat$Style);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NumberFormat$Style_ = $NumberFormat$Style$Type;
}}
declare module "packages/java/text/$Format" {
import {$FieldPosition, $FieldPosition$Type} from "packages/java/text/$FieldPosition"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$StringBuffer, $StringBuffer$Type} from "packages/java/lang/$StringBuffer"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$AttributedCharacterIterator, $AttributedCharacterIterator$Type} from "packages/java/text/$AttributedCharacterIterator"
import {$ParsePosition, $ParsePosition$Type} from "packages/java/text/$ParsePosition"

export class $Format implements $Serializable, $Cloneable {


public "parseObject"(arg0: string, arg1: $ParsePosition$Type): any
public "parseObject"(arg0: string): any
public "formatToCharacterIterator"(arg0: any): $AttributedCharacterIterator
public "clone"(): any
public "format"(arg0: any): string
public "format"(arg0: any, arg1: $StringBuffer$Type, arg2: $FieldPosition$Type): $StringBuffer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Format$Type = ($Format);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Format_ = $Format$Type;
}}
declare module "packages/java/text/$AttributedCharacterIterator" {
import {$CharacterIterator, $CharacterIterator$Type} from "packages/java/text/$CharacterIterator"
import {$AttributedCharacterIterator$Attribute, $AttributedCharacterIterator$Attribute$Type} from "packages/java/text/$AttributedCharacterIterator$Attribute"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $AttributedCharacterIterator extends $CharacterIterator {

 "getAttribute"(arg0: $AttributedCharacterIterator$Attribute$Type): any
 "getAttributes"(): $Map<($AttributedCharacterIterator$Attribute), (any)>
 "getAllAttributeKeys"(): $Set<($AttributedCharacterIterator$Attribute)>
 "getRunStart"(): integer
 "getRunStart"(arg0: $Set$Type<(any)>): integer
 "getRunStart"(arg0: $AttributedCharacterIterator$Attribute$Type): integer
 "getRunLimit"(arg0: $AttributedCharacterIterator$Attribute$Type): integer
 "getRunLimit"(): integer
 "getRunLimit"(arg0: $Set$Type<(any)>): integer
 "setIndex"(arg0: integer): character
 "getBeginIndex"(): integer
 "getEndIndex"(): integer
 "clone"(): any
 "next"(): character
 "last"(): character
 "first"(): character
 "current"(): character
 "previous"(): character
 "getIndex"(): integer
}

export namespace $AttributedCharacterIterator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttributedCharacterIterator$Type = ($AttributedCharacterIterator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttributedCharacterIterator_ = $AttributedCharacterIterator$Type;
}}
declare module "packages/java/text/$NumberFormat" {
import {$FieldPosition, $FieldPosition$Type} from "packages/java/text/$FieldPosition"
import {$NumberFormat$Style, $NumberFormat$Style$Type} from "packages/java/text/$NumberFormat$Style"
import {$StringBuffer, $StringBuffer$Type} from "packages/java/lang/$StringBuffer"
import {$RoundingMode, $RoundingMode$Type} from "packages/java/math/$RoundingMode"
import {$Format, $Format$Type} from "packages/java/text/$Format"
import {$Currency, $Currency$Type} from "packages/java/util/$Currency"
import {$ParsePosition, $ParsePosition$Type} from "packages/java/text/$ParsePosition"
import {$Locale, $Locale$Type} from "packages/java/util/$Locale"

export class $NumberFormat extends $Format {
static readonly "INTEGER_FIELD": integer
static readonly "FRACTION_FIELD": integer


public "getRoundingMode"(): $RoundingMode
public "parseObject"(arg0: string, arg1: $ParsePosition$Type): any
public static "getIntegerInstance"(arg0: $Locale$Type): $NumberFormat
public static "getIntegerInstance"(): $NumberFormat
public "setGroupingUsed"(arg0: boolean): void
public "setMinimumIntegerDigits"(arg0: integer): void
public "setMaximumIntegerDigits"(arg0: integer): void
public static "getCurrencyInstance"(arg0: $Locale$Type): $NumberFormat
public static "getCurrencyInstance"(): $NumberFormat
public static "getPercentInstance"(): $NumberFormat
public static "getPercentInstance"(arg0: $Locale$Type): $NumberFormat
public static "getCompactNumberInstance"(): $NumberFormat
public static "getCompactNumberInstance"(arg0: $Locale$Type, arg1: $NumberFormat$Style$Type): $NumberFormat
public "parse"(arg0: string): number
public "parse"(arg0: string, arg1: $ParsePosition$Type): number
public "isParseIntegerOnly"(): boolean
public "setParseIntegerOnly"(arg0: boolean): void
public "getMaximumIntegerDigits"(): integer
public "getMinimumIntegerDigits"(): integer
public "getMaximumFractionDigits"(): integer
public "setMaximumFractionDigits"(arg0: integer): void
public "getMinimumFractionDigits"(): integer
public "setMinimumFractionDigits"(arg0: integer): void
public "getCurrency"(): $Currency
public "setCurrency"(arg0: $Currency$Type): void
public "setRoundingMode"(arg0: $RoundingMode$Type): void
public static "getNumberInstance"(): $NumberFormat
public static "getNumberInstance"(arg0: $Locale$Type): $NumberFormat
public "isGroupingUsed"(): boolean
public static "getAvailableLocales"(): ($Locale)[]
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "clone"(): any
public "format"(arg0: double, arg1: $StringBuffer$Type, arg2: $FieldPosition$Type): $StringBuffer
public "format"(arg0: long): string
public "format"(arg0: double): string
public "format"(arg0: any, arg1: $StringBuffer$Type, arg2: $FieldPosition$Type): $StringBuffer
public "format"(arg0: long, arg1: $StringBuffer$Type, arg2: $FieldPosition$Type): $StringBuffer
public static "getInstance"(arg0: $Locale$Type): $NumberFormat
public static "getInstance"(): $NumberFormat
get "roundingMode"(): $RoundingMode
get "integerInstance"(): $NumberFormat
set "groupingUsed"(value: boolean)
set "minimumIntegerDigits"(value: integer)
set "maximumIntegerDigits"(value: integer)
get "currencyInstance"(): $NumberFormat
get "percentInstance"(): $NumberFormat
get "compactNumberInstance"(): $NumberFormat
get "parseIntegerOnly"(): boolean
set "parseIntegerOnly"(value: boolean)
get "maximumIntegerDigits"(): integer
get "minimumIntegerDigits"(): integer
get "maximumFractionDigits"(): integer
set "maximumFractionDigits"(value: integer)
get "minimumFractionDigits"(): integer
set "minimumFractionDigits"(value: integer)
get "currency"(): $Currency
set "currency"(value: $Currency$Type)
set "roundingMode"(value: $RoundingMode$Type)
get "numberInstance"(): $NumberFormat
get "groupingUsed"(): boolean
get "availableLocales"(): ($Locale)[]
get "instance"(): $NumberFormat
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NumberFormat$Type = ($NumberFormat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NumberFormat_ = $NumberFormat$Type;
}}
