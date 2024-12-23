import React from 'react'

import ToolCard from '../tool-card';

import { ToolInvocation } from 'ai';
import { GetTokenDataResultType } from '@/agentkit/actions/solana/types';
import { JupiterTokenData } from 'solana-agent-kit';
import { Card } from '@/components/ui';

interface Props {
    tool: ToolInvocation
}

const GetTokenData: React.FC<Props> = ({ tool }) => {

    return (
        <ToolCard 
            tool={tool}
            icon="Wallet"
            agentName="Market Agent"
            loadingText={`Getting Token Data...`}
            resultHeading={() => `Token Data`}
            resultBody={(result: GetTokenDataResultType) => result.body 
                ? <TokenCard token={result.body.token} />
                :  "No token data found"}
            defaultOpen={true}
        />
    )
}

const TokenCard = ({ token }: { token: JupiterTokenData}) => {
    return (
        <Card className="p-2 flex items-center gap-2">
            <img src={token.logoURI} alt={token.name} className="w-10 h-10" />
            <div className="flex flex-col">
                <p className="text-md font-bold">{token.name} ({token.symbol})</p>
                <p className="text-xs text-muted-foreground">Daily Volume: ${token.daily_volume.toLocaleString()}</p>
            </div>
        </Card>
    )
}

export default GetTokenData;