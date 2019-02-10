const control = '12345';
const test = '54321';
const baseUrl = 'https://secure3.convio.net/coh/Donation2?df_id='
const current = 'current'
const lapsed = 'lapsed'
const nondonor = 'nondonor'

const segments = {
  currentC: {
    name: 'current control',
    url: `${baseUrl}${control}&utm_medium=email&utm_content=${current}`
  },
  currentT: {
    name: 'current test',
    url: `${baseUrl}${test}&utm_medium=email&utm_content=${current}`
  },
  lapsed: {
    name: 'lapsed',
    url: `${baseUrl}${control}&utm_medium=email&utm_content=${lapsed}`,
    text: 'renew'
  },
  nondonor: {
    name: 'nondonor',
    url: `${baseUrl}${control}&utm_medium=email&utm_content=${nondonor}`,
    text: 'join'
  }
}

exports.segments = segments;
