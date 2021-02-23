import React from "react";
import PropTypes from "prop-types";
import {Json, Text} from "@yosmy/ui";

const type = "yosmy.recharge.ding.execute_request_fail";

const ExecuteRequestFailEvent = ({
    ui, involved, extra, date
}) => {
    return <ui.layout
        label={<Text>Llamada con error a la api</Text>}
        involved={[
            <Json>{involved}</Json>
        ]}
        extra={<Json>{extra}</Json>}
        date={date}
    />
}

ExecuteRequestFailEvent.propTypes = {
    ui: PropTypes.shape({
        layout: PropTypes.func.isRequired
    }).isRequired,
};

ExecuteRequestFailEvent.defaultProps = {
    hide: {
        user: false,
    }
};

export {
    ExecuteRequestFailEvent,
    type as ExecuteRequestFailEventType,
};