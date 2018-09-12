import toastr from 'toastr';
import React, { Component } from "react";

class NotificationService extends Component {

  success(message, title = null, timeOut = 3000, progressBar = true) {
    return toastr.success(message, title, {
            timeOut: timeOut,
            progressBar: progressBar
          });
  }

  error(message, title = null, timeOut = 3000, progressBar = true) {
    return toastr.error(message, title, {
            timeOut: timeOut,
            progressBar: progressBar
          });
  }

  info(message, title = null, timeOut = 1000, progressBar = true) {
    return toastr.info(message, title, {
            timeOut: timeOut,
            progressBar: progressBar
          });
  }

  warning(message, title = null, timeOut = 3000, progressBar = true) {
    return toastr.warning(message, title, {
            timeOut: timeOut,
            progressBar: progressBar
          });
  }
}

export default new NotificationService();
