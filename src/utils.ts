export async function fetchPackage(packageId: string): Promise<Mail> {
  return await fetch('https://uss.poczta-polska.pl/uss/v1.0/tracking/checkmailex', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'API_KEY': 'BiGwVG2XHvXY+kPwJVPA8gnKchOFsyy39Thkyb1wAiWcKLQ1ICyLiCrxj1+vVGC+kQk3k0b74qkmt5/qVIzo7lTfXhfgJ72Iyzz05wH2XZI6AgXVDciX7G2jLCdoOEM6XegPsMJChiouWS2RZuf3eOXpK5RPl8Sy4pWj+b07MLg=.Mjg0Q0NFNzM0RTBERTIwOTNFOUYxNkYxMUY1NDZGMTA0NDMwQUIyRjg4REUxMjk5NDAyMkQ0N0VCNDgwNTc1NA==.b24415d1b30a456cb8ba187b34cb6a86'
    },
    body: JSON.stringify({ language: 'EN', number: packageId, addPostOfficeInfo: true })
  })
    .then(res => res.json());
}


const KEY = 'packages';

export function saveTracked(packageIds: string[]) {
  const encoded = JSON.stringify(packageIds);
  localStorage.setItem(KEY, encoded);
}

export function loadTracked(): string[] {
  const encoded = localStorage.getItem(KEY) || '[]';
  return JSON.parse(encoded);
}


export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return `${date.toISOString().slice(0, 16).replace('T', ' ')}`;
}
