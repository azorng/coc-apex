import { Connection } from '@salesforce/core';
import { CliCommandExecution, Command } from '../../../salesforcedx-utils-vscode';
export interface SObject {
    actionOverrides: any[];
    activateable: boolean;
    childRelationships: ChildRelationship[];
    compactLayoutable: boolean;
    createable: boolean;
    custom: boolean;
    customSetting: boolean;
    deletable: boolean;
    deprecatedAndHidden: boolean;
    feedEnabled: boolean;
    fields: Field[];
    hasSubtypes: boolean;
    isSubtype: boolean;
    keyPrefix: string;
    label: string;
    labelPlural: string;
    layoutable: boolean;
    listviewable?: any;
    lookupLayoutable?: any;
    mergeable: boolean;
    mruEnabled: boolean;
    name: string;
    namedLayoutInfos: any[];
    networkScopeFieldName?: any;
    queryable: boolean;
    recordTypeInfos: RecordTypeInfo[];
    replicateable: boolean;
    retrieveable: boolean;
    searchLayoutable: boolean;
    searchable: boolean;
    supportedScopes: SupportedScope[];
    triggerable: boolean;
    undeletable: boolean;
    updateable: boolean;
    urls: Urls2;
}
export interface ChildRelationship {
    cascadeDelete: boolean;
    childSObject: string;
    deprecatedAndHidden: boolean;
    field: string;
    junctionIdListNames: any[];
    junctionReferenceTo: any[];
    relationshipName: string;
    restrictedDelete: boolean;
}
export interface Field {
    aggregatable: boolean;
    autoNumber: boolean;
    byteLength: number;
    calculated: boolean;
    calculatedFormula?: any;
    cascadeDelete: boolean;
    caseSensitive: boolean;
    compoundFieldName?: any;
    controllerName?: any;
    createable: boolean;
    custom: boolean;
    defaultValue?: boolean;
    defaultValueFormula?: any;
    defaultedOnCreate: boolean;
    dependentPicklist: boolean;
    deprecatedAndHidden: boolean;
    digits: number;
    displayLocationInDecimal: boolean;
    encrypted: boolean;
    externalId: boolean;
    extraTypeInfo?: any;
    filterable: boolean;
    filteredLookupInfo?: any;
    groupable: boolean;
    highScaleNumber: boolean;
    htmlFormatted: boolean;
    idLookup: boolean;
    inlineHelpText?: any;
    label: string;
    length: number;
    mask?: any;
    maskType?: any;
    name: string;
    nameField: boolean;
    namePointing: boolean;
    nillable: boolean;
    permissionable: boolean;
    picklistValues: any[];
    polymorphicForeignKey: boolean;
    precision: number;
    queryByDistance: boolean;
    referenceTargetField?: any;
    referenceTo: string[];
    relationshipName: string;
    relationshipOrder?: any;
    restrictedDelete: boolean;
    restrictedPicklist: boolean;
    scale: number;
    searchPrefilterable: boolean;
    soapType: string;
    sortable: boolean;
    type: string;
    unique: boolean;
    updateable: boolean;
    writeRequiresMasterRead: boolean;
}
export interface Urls {
    layout: string;
}
export interface RecordTypeInfo {
    active: boolean;
    available: boolean;
    defaultRecordTypeMapping: boolean;
    master: boolean;
    name: string;
    recordTypeId: string;
    urls: Urls;
}
export interface SupportedScope {
    label: string;
    name: string;
}
export interface Urls2 {
    compactLayouts: string;
    rowTemplate: string;
    approvalLayouts: string;
    uiDetailTemplate: string;
    uiEditTemplate: string;
    defaultValues: string;
    describe: string;
    uiNewRecord: string;
    quickActions: string;
    layouts: string;
    sobject: string;
}
export interface DescribeSObjectResult {
    result: SObject;
}
export declare enum SObjectCategory {
    ALL = "ALL",
    STANDARD = "STANDARD",
    CUSTOM = "CUSTOM"
}
declare type SubRequest = {
    method: string;
    url: string;
};
declare type BatchRequest = {
    batchRequests: SubRequest[];
};
declare type SubResponse = {
    statusCode: number;
    result: SObject;
};
declare type BatchResponse = {
    hasErrors: boolean;
    results: SubResponse[];
};
export declare class ForceListSObjectSchemaExecutor {
    build(type: string): Command;
    execute(projectPath: string, type: string): CliCommandExecution;
}
export declare class SObjectDescribe {
    private connection;
    private readonly servicesPath;
    private readonly targetVersion;
    private readonly versionPrefix;
    private readonly sobjectsPart;
    private readonly batchPart;
    constructor(connection: Connection);
    describeGlobal(projectPath: string, type: SObjectCategory): Promise<string[]>;
    buildSObjectDescribeURL(sObjectName: string): string;
    buildBatchRequestURL(): string;
    buildBatchRequestBody(types: string[], nextToProcess: number): BatchRequest;
    runRequest(batchRequest: BatchRequest): Promise<BatchResponse>;
    describeSObjectBatch(types: string[], nextToProcess: number): Promise<SObject[]>;
    getVersion(): string;
}
export {};
