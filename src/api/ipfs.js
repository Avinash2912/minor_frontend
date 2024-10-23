const ipfsClient = require('ipfs-http-client');

const projectId = '';
const projectSecret = '';

const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

const client = ipfsClient.create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: auth,
    },
});

export async function uploadEvidence(file) {
  const result = await client.add(file);
  const url = `https://ipfs.infura.io/ipfs/${result.path}`;
  return url;
}
