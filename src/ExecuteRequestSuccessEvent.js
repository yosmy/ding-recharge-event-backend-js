import React from "react";
import PropTypes from "prop-types";
import {Json, Text} from "@yosmy/ui";

const type = "yosmy.recharge.ding.execute_request_success";

const ExecuteRequestSuccessEvent = ({
    ui, involved, extra, date
}) => {
    return <ui.layout
        label={<Text>Llamada exitosa a la api</Text>}
        involved={[
            <Json>{involved}</Json>
        ]}
        extra={<Json>{extra}</Json>}
        date={date}
    />
}

ExecuteRequestSuccessEvent.propTypes = {
    ui: PropTypes.shape({
        layout: PropTypes.func.isRequired
    }).isRequired,
};

export {
    ExecuteRequestSuccessEvent,
    type as ExecuteRequestSuccessEventType,
};