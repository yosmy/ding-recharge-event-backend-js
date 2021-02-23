import React from "react";
import {ExecuteRequestSuccessEvent, ExecuteRequestSuccessEventType} from "./ExecuteRequestSuccessEvent";
import {ExecuteRequestFailEvent, ExecuteRequestFailEventType} from "./ExecuteRequestFailEvent";

const resolve = (labels) => {
    if (labels.includes(ExecuteRequestSuccessEventType)) {
        return ExecuteRequestSuccessEvent;
    }
    else if (labels.includes(ExecuteRequestFailEventType)) {
        return ExecuteRequestFailEvent;
    }

    return false;
};

export default resolve;